'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useApiErrorHandler = undefined;

var _react = require('react');

var _RestContext = require('../context/RestContext');

var useApiErrorHandler = exports.useApiErrorHandler = function useApiErrorHandler() {
	var _useContext = (0, _react.useContext)(_RestContext.RestContext),
	    restContext = _useContext.restContext;

	var catchRedirect = function catchRedirect(result) {
		if (!result || !result.result || result.result !== 'redirect') return result;
		throw result;
	};

	var handleError = function handleError(error) {
		if (process.env.NODE_ENV !== 'production') {
			console.log(error);
		}

		var reThrow = true;
		var msg = '';

		switch (error.token) {
			case 'error_authentication_required':
			case 'error_login_required':
				if (restContext.snackMessageCallback) restContext.snackMessageCallback('error_login_required', 'error', true);
				if (restContext.logoutUserCallback) restContext.logoutUserCallback();
				break;
			case 'invalid_request_token':
				reThrow = false;
				if (typeof window !== 'undefined') window.location.reload();
				break;
			case 'login_error_no_login':
				if (restContext.snackMessageCallback) restContext.snackMessageCallback(error.token, 'error', true);
				break;
			default:
				if (error.exception === 'Exception\\Fields') {
					var fieldKeys = Object.keys(error.fields_invalid);

					// We handle only 1 message for now, so take the first one
					msg = error.fields_invalid[fieldKeys[0]].message;
				} else {
					if ('message' in error) msg = error.message;else if ('error' in error) msg = error.error;else msg = error;
				}

				if (restContext.snackMessageCallback) restContext.snackMessageCallback(msg, 'error', false);
				break;
		}

		if (reThrow) throw error;
		return error;
	};

	return [catchRedirect, handleError];
};