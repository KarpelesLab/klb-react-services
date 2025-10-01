"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApiErrorHandler = void 0;
var _react = require("react");
var _RestContext = require("../context/RestContext");
const useApiErrorHandler = () => {
  const {
    restContext,
    setLastError
  } = (0, _react.useContext)(_RestContext.RestContext);
  const catchRedirect = result => {
    if (!result || !result.result || result.result !== 'redirect') return result;
    throw result;
  };
  const handleError = function (error) {
    let endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    let settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    let action = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    if (process.env.NODE_ENV !== 'production') {
      console.log(error);
    }
    let reThrow = true;
    let msg = '';
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
          if ('message' in error) msg = error.message;else if ('error' in error) msg = error.error;else msg = error;
        }
        if (restContext.snackMessageCallback) restContext.snackMessageCallback(msg, 'error', false);
        break;
    }
    setLastError(error);
    if (restContext.restErrorCallback) restContext.restErrorCallback(error);
    if (reThrow) throw error;
    return error;
  };
  return [catchRedirect, handleError];
};
exports.useApiErrorHandler = useApiErrorHandler;