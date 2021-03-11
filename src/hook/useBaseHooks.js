import { useCallback, useContext, useEffect, useState } from 'react';
import { useApiErrorHandler }                           from './useApiErrorHandler';
import { rest, upload }                                 from '@karpeleslab/klbfw';
import { RestContext }                                  from '../context/RestContext';

const deepCopy = (object) => {
	return JSON.parse(JSON.stringify(object));
};

export const useResource = (endpoint, params = {}) => {
	const [resource, setResource]      = useState(null);
	const [catchRedirect, handleError] = useApiErrorHandler();

	const refresh = useCallback(
		data => {
			if (data) {
				setResource({ ...(resource ? resource : {}), data: data });
				return;
			}

			return rest(endpoint, 'GET', params)
				.then(catchRedirect)
				.then(r => {
					setResource(r);
					return r;
				})
				.catch(e => {
					setResource({ error: e });
					handleError(e);
				});
		}
		, [resource]); //eslint-disable-line

	useEffect(() => {
		refresh();
	}, []); //eslint-disable-line

	return [resource, refresh];
};

export const useResourceList = endpoint => {
	const [list, setList]              = useState(null);
	const [loading, setLoading]        = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [lastFilter, setLastFilter]  = useState({});
	const [lastPaging, setLastPaging]  = useState({});

	const fetch = useCallback((filters = null, paging = null) => {
		setLoading(true);
		if (filters) setLastFilter(lastFilter);
		if (paging) setLastPaging(lastFilter);

		return rest(endpoint, 'GET', {
			...(filters ? filters : lastFilter),
			...(paging ? paging : lastPaging),
		})
			.then(catchRedirect)
			.then(list => {
				setList(list);
				return list;
			})
			.catch(handleError)
			.finally(() => setLoading(false));
	}, []); //eslint-disable-line

	const setItem = (idx, item) => {
		const cpy     = deepCopy(list);
		cpy.data[idx] = item;
		setList(cpy);
	};

	return [list, fetch, loading, setItem];
};

const defaultSettings = {
	snackMessageToken:    null,
	snackMessageSeverity: 'success',
	catchRedirect:        true,
	handleError:          true,
	rawResult:            false,
	innerThen:            null,
};

export const useAction = (endpoint, method = 'POST', restSettings = {}) => {
	let settings = { ...defaultSettings, ...restSettings };

	const [loading, setLoading]        = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const { restContext }              = useContext(RestContext);

	const doAction = useCallback((params = {}, settingsOverride = {}) => {
		settings = { ...settings, ...settingsOverride };
		setLoading(true);
		return rest(endpoint, method, params)
			.then(d => settings.catchRedirect ? catchRedirect(d) : d)
			.then(d => settings.rawResult ? d : d.data)
			.then(d => settings.innerThen ? settings.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && settings.snackMessageToken)
					restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
				return res;
			})
			.catch(d => settings.handleError ? handleError(d) : d)
			.finally(() => {
				setLoading(false);
			});
	}, [endpoint, method]);//eslint-disable-line

	return [doAction, loading];
};

export const useFileUploader = (restSettings = {}) => {
	let settings                       = { ...defaultSettings, ...restSettings };
	const [progress, setProgress]      = useState(0);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [uploading, setUploading]    = useState(false);
	const { restContext }              = useContext(RestContext);

	const doIt = useCallback((endpoint, file, params, settingsOverride = {}) => {
		settings = { ...settings, ...settingsOverride };
		return new Promise((resolve, reject) => {
			setUploading(true);
			upload.onprogress = d => {
				let blockTotal    = 0;
				let progressTotal = 0;
				d.running.forEach((running) => {
					if (running.status !== 'pending' && running.status !== 'complete') {
						progressTotal += running.done;
						blockTotal += running.blocks;
					}

				});

				if (d.failed.length > 0) {
					reject(d.failed[0].failure);
					return;
				}

				setProgress(blockTotal > 0 ? progressTotal / blockTotal : 0);
			};

			upload.append(endpoint, file, params)
			      .then(d => settings.catchRedirect ? catchRedirect(d) : d)
			      .then(resolve)
			      .catch(reject);

			upload.run();

		})
			.then(data => data.final)
			.then(d => settings.innerThen ? settings.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && settings.snackMessageToken)
					restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
				return res;
			})
			.catch(d => settings.handleError ? handleError(d) : d)
			.finally(() => setUploading(false));

	}, []);//eslint-disable-line

	return [doIt, uploading, progress];
};
