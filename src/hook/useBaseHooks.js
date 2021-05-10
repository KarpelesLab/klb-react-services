import { useCallback, useContext, useEffect, useState } from 'react';
import { useApiErrorHandler }                           from './useApiErrorHandler';
import { rest, upload }                                 from '@karpeleslab/klbfw';
import { RestContext }                                  from '../context/RestContext';

const deepCopy = (object) => {
	return JSON.parse(JSON.stringify(object));
};

export const useResource = (endpoint, params = null, restSettings = null) => {
	let settings = { ...defaultSettings, ...(restSettings ? restSettings : {}) };

	const [resource, setResource] = useState(null);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [loading, setLoading] = useState(false);

	const { restContext } = useContext(RestContext);

	const refresh = useCallback(
		(data, settingsOverride = null) => {
			settings = { ...settings, ...(settingsOverride ? settingsOverride : {}) };

			if (data) {
				setResource(prev => ({ ...(prev ? prev : {}), data: data }));
				return;
			}

			if (!settings.silent) setLoading(true);
			return rest(endpoint, 'GET', params ? params : {})
				.then(d => settings.catchRedirect ? catchRedirect(d) : d)
				.then(d => settings.innerThen ? settings.innerThen(d) : d)
				.then(r => {
					setResource(r);
					return r;
				})
				.then(res => {
					if (restContext.snackMessageCallback && settings.snackMessageToken)
						restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
					return res;
				})
				.catch(e => {
					setResource({ error: e });
					if (settings.handleError) handleError(e);
					else {
						throw d;
					}
				})
				.finally(() => {
					if (!settings.silent)
						setLoading(false);
				});
		}
		, [setResource, endpoint, params]); //eslint-disable-line

	useEffect(() => {
		refresh();
	}, [endpoint, params]); //eslint-disable-line

	return [resource, refresh, loading];
};

export const useResourceList = (endpoint, restSettings = null) => {
	let settings = { ...defaultSettings, ...(restSettings ? restSettings : {}) };

	const [list, setList] = useState(null);
	const [loading, setLoading] = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [lastFilter, setLastFilter] = useState({});
	const [lastPaging, setLastPaging] = useState({});

	const { restContext } = useContext(RestContext);

	const fetch = useCallback((filters = null, paging = null, settingsOverride = null) => {
		settings = { ...settings, ...(settingsOverride ? settingsOverride : {}) };

		if (!settings.silent) setLoading(true);
		if (filters) setLastFilter(lastFilter);
		if (paging) setLastPaging(lastFilter);

		return rest(endpoint, 'GET', {
			...(filters ? filters : lastFilter),
			...(paging ? paging : lastPaging),
		})
			.then(d => settings.catchRedirect ? catchRedirect(d) : d)
			.then(d => settings.innerThen ? settings.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && settings.snackMessageToken)
					restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
				return res;
			})
			.then(list => {
				setList(list);
				return list;
			})
			.catch(d => {
				if (settings.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!settings.silent) setLoading(true);
			});
	}, []); //eslint-disable-line

	const setItem = (idx, item) => {
		const cpy = deepCopy(list);
		cpy.data[idx] = item;
		setList(cpy);
	};

	return [list, fetch, loading, setItem];
};

const defaultSettings = {
	snackMessageToken: null,
	snackMessageSeverity: 'success',
	catchRedirect: true,
	handleError: true,
	rawResult: false,
	silent: false,
	innerThen: null,
};

export const useAction = (endpoint, method = 'POST', restSettings = null) => {
	let settings = { ...defaultSettings, ...(restSettings ? restSettings : {}) };

	const [loading, setLoading] = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const { restContext } = useContext(RestContext);

	const doAction = useCallback((params = {}, settingsOverride = null) => {
		settings = { ...settings, ...(settingsOverride ? settingsOverride : {}) };
		if (!settings.silent) setLoading(true);
		return rest(endpoint, method, params)
			.then(d => settings.catchRedirect ? catchRedirect(d) : d)
			.then(d => settings.rawResult ? d : d.data)
			.then(d => settings.innerThen ? settings.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && settings.snackMessageToken)
					restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
				return res;
			})
			.catch(d => {
				if (settings.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!settings.silent) setLoading(false);
			});
	}, [endpoint, method]);//eslint-disable-line

	return [doAction, loading];
};

export const useFileUploader = (restSettings = null) => {
	let settings = { ...defaultSettings, ...(restSettings ? restSettings : {}) };
	const [progress, setProgress] = useState(0);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [uploading, setUploading] = useState(false);
	const { restContext } = useContext(RestContext);

	const doIt = useCallback((endpoint, file, params, settingsOverride = null) => {
		settings = { ...settings, ...(settingsOverride ? settingsOverride : {}) };
		return new Promise((resolve, reject) => {
			if (!settings.silent) setUploading(true);
			upload.onprogress = d => {
				let blockTotal = 0;
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
			.catch(d => {
				if (settings.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!settings.silent)
					setUploading(false);
			});

	}, []);//eslint-disable-line

	return [doIt, uploading, progress];
};
