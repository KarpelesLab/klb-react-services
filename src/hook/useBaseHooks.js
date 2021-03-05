import { useCallback, useContext, useEffect, useState } from 'react';
import { useApiErrorHandler }                           from './useApiErrorHandler';
import { rest }                                         from '@karpeleslab/klbfw';
import { RestContext }                                  from '../context/RestContext';

const deepCopy = (object) => {
	return JSON.parse(JSON.stringify(object));
};

export const useResource = endpoint => {
	const [resource, setResource] = useState(null);
	const [catchRedirect, handleError] = useApiErrorHandler();

	const refresh = useCallback(
		data => {
			if (data) {
				setResource({ ...(resource ? resource : {}), data: data });
				return;
			}

			return rest(endpoint)
				.then(catchRedirect)
				.then(setResource)
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
	const [list, setList] = useState(null);
	const [loading, setLoading] = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const [lastFilter, setLastFilter] = useState({});
	const [lastPaging, setLastPaging] = useState({});

	const fetch = useCallback((filters = null, paging = null) => {
		setLoading(true);
		if (filters) setLastFilter(lastFilter);
		if (paging) setLastPaging(lastFilter);

		return rest(endpoint, 'GET', {
			...(filters ? filters : lastFilter),
			...(paging ? paging : lastPaging),
		})
			.then(catchRedirect)
			.then(setList)
			.catch(handleError)
			.finally(() => setLoading(false));
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
};

export const useAction = (endpoint, method = 'POST', restSettings = {}) => {
	const settings = { ...defaultSettings, ...restSettings };

	const [loading, setLoading] = useState(false);
	const [catchRedirect, handleError] = useApiErrorHandler();
	const { restContext } = useContext(RestContext);

	const doAction = useCallback((params = {}) => {
		setLoading(true);
		return rest(endpoint, method, params)
			.then(d => settings.catchRedirect ? catchRedirect(d) : d)
			.then(res => {
				if (restContext.snackMessageCallback && settings.snackMessageToken)
					restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
				if (settings.rawResult)
					return res;
				return res.data;
			})
			.catch(d => settings.handleError ? handleError(d) : d)
			.finally(() => {
				setLoading(false);
			});
	}, [endpoint, method]);//eslint-disable-line

	return [doAction, loading];
};
