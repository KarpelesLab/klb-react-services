"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserOTPs = exports.useUserOTPUnsetAction = exports.useUserOTPSetAction = exports.useUserOTPDelete = exports.useUserOTPCreate = exports.useUserOTPAssociate = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _userOtpEndpoints = require("../../enpoints/user/userOtpEndpoints");
const useUserOTPs = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _userOtpEndpoints.getUserOTPsEndpoint)(), restSettings);
};
exports.useUserOTPs = useUserOTPs;
const useUserOTPCreate = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPsEndpoint)(), 'POST');
  const doAction = (0, _react.useCallback)(name => _doAction({
    Name: name
  }), []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserOTPCreate = useUserOTPCreate;
const useUserOTPDelete = otpId => (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPEndpoint)(otpId), 'DELETE', {
  snackMessageToken: 'otp_delete_success'
});
exports.useUserOTPDelete = useUserOTPDelete;
const useUserOTPAssociate = otpId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPAssociateEndpoint)(otpId), 'POST', {
    snackMessageToken: 'otp_associate_success'
  });
  const doAction = (0, _react.useCallback)(function (code, name) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      otp: code,
      name: name
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserOTPAssociate = useUserOTPAssociate;
const useUserOTPSetAction = otpId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPSetEndpoint)(otpId), 'POST');
  const doAction = (0, _react.useCallback)(function (action) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      action: action
    }, {
      snackMessageToken: `otp_action_set_${action}_success`,
      ...settingsOverride
    });
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserOTPSetAction = useUserOTPSetAction;
const useUserOTPUnsetAction = otpId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPUnsetEndpoint)(otpId), 'POST');
  const doAction = (0, _react.useCallback)(function (action) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      action: action
    }, {
      snackMessageToken: `otp_action_unset_${action}_success`,
      ...settingsOverride
    });
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useUserOTPUnsetAction = useUserOTPUnsetAction;