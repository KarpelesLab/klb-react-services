import React, { createContext, useCallback, useState } from 'react';
import PropTypes                                       from 'prop-types';

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

RestContextContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
};
