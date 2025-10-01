"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserSetMeta = exports.useUserSetEmail = exports.useUserSetDefaultLocation = exports.useUserLogout = exports.useUserChangePassword = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _userEndpoints = require("../../enpoints/user/userEndpoints");
const useUserChangePassword = userId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userEndpoints.getUserSetPasswordEndpoint)(userId), 'POST', {
    snackMessageToken: 'success_password_changed'
  });
  const doAction = (0, _react.useCallback)(function (old_password, password) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      old_password: old_password,
      password: password
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserChangePassword = useUserChangePassword;
const useUserSetEmail = userId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userEndpoints.getUserSetEmailEndpoint)(userId), 'POST', {
    snackMessageToken: 'success_email_changed'
  });
  const doAction = (0, _react.useCallback)(function (email) {
    let password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const params = {
      email
    };
    if (password) params.current_password = password;
    return _doAction(params, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserSetEmail = useUserSetEmail;
const useUserLogout = () => (0, _useBaseHooks.useAction)((0, _userEndpoints.getUserLogoutEndpoint)(), 'POST');
exports.useUserLogout = useUserLogout;
const useUserSetDefaultLocation = userId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userEndpoints.getUserSetDefaultEndpoint)(userId), 'POST', {
    snackMessageToken: 'user_default_location_set_success'
  });
  const doAction = (0, _react.useCallback)(function (userLocationId, type) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      User_Location__: userLocationId,
      type: type
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserSetDefaultLocation = useUserSetDefaultLocation;
const useUserSetMeta = userId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userEndpoints.getUserSetMetaEndpoint)(userId), 'POST');
  const doAction = (0, _react.useCallback)(function (name, value) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      name: name,
      value: value
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserSetMeta = useUserSetMeta;