'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserLogout = exports.useUserSetEmail = exports.useUserChangePassword = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var useUserChangePassword = exports.useUserChangePassword = function useUserChangePassword(userId) {
	var _useAction = (0, _useBaseHooks.useAction)('User/' + userId + ':setPassword', 'POST', { snackMessageToken: 'success_password_changed' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (old_password, password) {
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		return _doAction({
			old_password: old_password,
			password: password
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useUserSetEmail = exports.useUserSetEmail = function useUserSetEmail(userId) {
	var _useAction3 = (0, _useBaseHooks.useAction)('User/' + userId + ':setEmail', 'POST', { snackMessageToken: 'success_email_changed' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (email) {
		var password = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var params = { email: email };
		if (password) params.current_password = password;

		return _doAction(params, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useUserLogout = exports.useUserLogout = function useUserLogout() {
	return (0, _useBaseHooks.useAction)('User/@:logout', 'POST');
};