import React, { createContext, useCallback, useState } from 'react';

export const defaultRestContext = { snackMessageCallback: null, logoutUserCallback: null };
export const RestContext = createContext(defaultRestContext);

export const RestContextContainer = ({ children }) => {

	const [restContext, setContext] = useState(defaultRestContext);

	const setSnackMessageCallback = useCallback(callback => {
		setContext(prev => {
			return { ...prev, snackMessageCallback: callback };
		});
	}, [setContext]); // eslint-disable-line

	const setLogoutUserCallback = useCallback(callback => {
		setContext(prev => {
			return { ...prev, logoutUserCallback: callback };
		});
	}, [setContext]); // eslint-disable-line

	return (
		<RestContext.Provider value={{ restContext, setSnackMessageCallback, setLogoutUserCallback }}>
			{children}
		</RestContext.Provider>
	);
};
