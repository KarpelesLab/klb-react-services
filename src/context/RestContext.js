import React, { createContext, useCallback, useState } from 'react';

export const defaultRestContext = {
	snackMessageCallback: null,
	logoutUserCallback: null,
	restErrorCallback: null,
	lastError: null
};
export const RestContext = createContext(defaultRestContext);

export const RestContextContainer = ({ children }) => {
	const [restContext, setContext] = useState(defaultRestContext);

	const setSnackMessageCallback = useCallback(callback => {
		setContext(prev => {
			return { ...prev, snackMessageCallback: callback };
		});
	}, [setContext]); // eslint-disable-line

	const setRestErrorCallbackCallback = useCallback(callback => {
		setContext(prev => {
			return { ...prev, restErrorCallback: callback };
		});
	}, [setContext]); // eslint-disable-line


	const setLogoutUserCallback = useCallback(callback => {
		setContext(prev => {
			return { ...prev, logoutUserCallback: callback };
		});
	}, [setContext]); // eslint-disable-line

	const setLastError = useCallback(lastError => {
		setContext(prev => {
			return { ...prev, lastError: lastError };
		});
	}, [setContext]); // eslint-disable-line

	return (
		<RestContext.Provider
			value={{ restContext, setSnackMessageCallback, setLogoutUserCallback, setRestErrorCallbackCallback, setLastError }}>
			{children}
		</RestContext.Provider>
	);
};
