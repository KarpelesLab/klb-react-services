import { useContext }  from 'react';
import { RestContext } from '../context/RestContext';

export const useApiErrorHandler = () => {
	const { restContext, setLastError } = useContext(RestContext);

	const catchRedirect = result => {
		if (!result || !result.result || result.result !== 'redirect')
			return result;
		throw result;
	};

	const handleError = (error, endpoint = null, params = null, settings = null, action = null)  => {
		if (process.env.NODE_ENV !== 'production') {
			console.log(error);
		}

		let reThrow = true;
		let msg = '';

		switch (error.token) {
			case 'error_authentication_required':
			case 'error_login_required':
				if (restContext.snackMessageCallback)
					restContext.snackMessageCallback('error_login_required', 'error', true);
				if (restContext.logoutUserCallback)
					restContext.logoutUserCallback();
				break;
			case 'invalid_request_token':
				reThrow = false;
				if (typeof window !== 'undefined') window.location.reload();
				break;
			case 'login_error_no_login':
				if (restContext.snackMessageCallback)
					restContext.snackMessageCallback(error.token, 'error', true);
				break;
			case 'error_otp_required':
				if (restContext.otpRequiredCallback) {
					restContext.otpRequiredCallback(error.otp_session, error.otp_action, endpoint, params);
				}
				break;
			default:
				if (error.exception === 'Exception\\Fields') {
					const fieldKeys = Object.keys(error.fields_invalid);

					// We handle only 1 message for now, so take the first one
					msg = error.fields_invalid[fieldKeys[0]].message;
				} else {
					if ('message' in error)
						msg = error.message;
					else if ('error' in error)
						msg = error.error;
					else
						msg = error;
				}

				if (restContext.snackMessageCallback)
					restContext.snackMessageCallback(msg, 'error', false);
				break;
		}

		setLastError(error);

		if (restContext.restErrorCallback)
			restContext.restErrorCallback(error);

		if (reThrow) throw error;

		return error;
	};

	return [catchRedirect, handleError];
};
