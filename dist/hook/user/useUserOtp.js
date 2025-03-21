'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserOTPUnsetAction = exports.useUserOTPSetAction = exports.useUserOTPAssociate = exports.useUserOTPDelete = exports.useUserOTPCreate = exports.useUserOTPs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _userOtpEndpoints = require('../../enpoints/user/userOtpEndpoints');

var useUserOTPs = exports.useUserOTPs = function useUserOTPs() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return (0, _useBaseHooks.useResourceList)((0, _userOtpEndpoints.getUserOTPsEndpoint)(), restSettings);
};
var useUserOTPCreate = exports.useUserOTPCreate = function useUserOTPCreate() {
	var _useAction = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPsEndpoint)(), 'POST'),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (name) {
		return _doAction({ Name: name });
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useUserOTPDelete = exports.useUserOTPDelete = function useUserOTPDelete(otpId) {
	return (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPEndpoint)(otpId), 'DELETE', { snackMessageToken: 'otp_delete_success' });
};
var useUserOTPAssociate = exports.useUserOTPAssociate = function useUserOTPAssociate(otpId) {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPAssociateEndpoint)(otpId), 'POST', { snackMessageToken: 'otp_associate_success' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (code, name) {
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		return _doAction({
			otp: code,
			name: name
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useUserOTPSetAction = exports.useUserOTPSetAction = function useUserOTPSetAction(otpId) {
	var _useAction5 = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPSetEndpoint)(otpId), 'POST'),
	    _useAction6 = _slicedToArray(_useAction5, 2),
	    _doAction = _useAction6[0],
	    loading = _useAction6[1];

	var doAction = (0, _react.useCallback)(function (action) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ action: action }, _extends({ snackMessageToken: 'otp_action_set_' + action + '_success' }, settingsOverride));
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useUserOTPUnsetAction = exports.useUserOTPUnsetAction = function useUserOTPUnsetAction(otpId) {
	var _useAction7 = (0, _useBaseHooks.useAction)((0, _userOtpEndpoints.getUserOTPUnsetEndpoint)(otpId), 'POST'),
	    _useAction8 = _slicedToArray(_useAction7, 2),
	    _doAction = _useAction8[0],
	    loading = _useAction8[1];

	var doAction = (0, _react.useCallback)(function (action) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ action: action }, _extends({ snackMessageToken: 'otp_action_unset_' + action + '_success' }, settingsOverride));
	}, []); //eslint-disable-line

	return [doAction, loading];
};