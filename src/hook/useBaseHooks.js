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
			const s = { ...settings, ...(settingsOverride ? settingsOverride : {}) };

			if (data) {
				setResource(prev => ({ ...(prev ? prev : {}), data: data }));
				return;
			}

			if (!s.silent) setLoading(true);
			return rest(endpoint, 'GET', params ? params : {})
				.then(d => s.catchRedirect ? catchRedirect(d) : d)
				.then(d => s.innerThen ? s.innerThen(d) : d)
				.then(r => {
					setResource(r);
					return r;
				})
				.then(res => {
					if (restContext.snackMessageCallback && s.snackMessageToken)
						restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
					return res;
				})
				.catch(e => {
					setResource({ error: e });
					if (s.handleError) handleError(e);
					else {
						throw e;
					}
				})
				.finally(() => {
					if (!s.silent)
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
		const s = { ...settings, ...(settingsOverride ? settingsOverride : {}) };

		if (!s.silent) setLoading(true);
		if (filters) setLastFilter(filters);
		if (paging) setLastPaging(paging);

		return rest(endpoint, 'GET', {
			...(filters ? filters : lastFilter),
			...(paging ? paging : lastPaging),
		})
			.then(d => s.catchRedirect ? catchRedirect(d) : d)
			.then(d => s.innerThen ? s.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && s.snackMessageToken)
					restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
				return res;
			})
			.then(list => {
				setList(list);
				return list;
			})
			.catch(d => {
				if (s.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!s.silent) setLoading(false);
			});
	}, [lastPaging, lastFilter, endpoint]); //eslint-disable-line

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
		const s = { ...settings, ...(settingsOverride ? settingsOverride : {}) };
		if (!s.silent) setLoading(true);
		return rest(endpoint, method, params)
			.then(d => s.catchRedirect ? catchRedirect(d) : d)
			.then(d => s.rawResult ? d : d.data)
			.then(d => s.innerThen ? s.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && s.snackMessageToken)
					restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
				return res;
			})
			.catch(d => {
				if (s.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!s.silent) setLoading(false);
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

	const doIt = useCallback((endpoint, files, params, settingsOverride = null, onFileComplete = null) => {
		if(files instanceof File) files = [files];
		const total = files.length;
		let current = 0;
		const s = { ...settings, ...(settingsOverride ? settingsOverride : {}) };
		return new Promise((resolve, reject) => {
			if (!s.silent) setUploading(true);
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

			for (let i = 0; i < files.length; i++) {
				upload.append(endpoint, files[i], params)
					.then(d => s.catchRedirect ? catchRedirect(d) : d)
					.then(d => {
						if(onFileComplete) onFileComplete(d);
						current +=1;
						if (current<total)return;
						return resolve(d);
					})
					.catch(reject);
			}

			upload.run();

		})
			.then(data => data.final)
			.then(d => s.innerThen ? s.innerThen(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && s.snackMessageToken)
					restContext.snackMessageCallback(s.snackMessageToken, s.snackMessageSeverity, true);
				return res;
			})
			.catch(d => {
				if (s.handleError) handleError(d);
				else {
					throw d;
				}
			})
			.finally(() => {
				if (!s.silent)
					setUploading(false);
			});

	}, []);//eslint-disable-line

	return [doIt, uploading, progress];
};
