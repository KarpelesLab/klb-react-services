'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useKeychainKeyCheck = exports.useKeychainKeyCreate = exports.useKeychainKeyDelete = exports.useKeychainKeys = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _keychainKeyEndpoints = require('../../enpoints/keychain/keychainKeyEndpoints');

var useKeychainKeys = exports.useKeychainKeys = function useKeychainKeys(keychainId) {
	return (0, _useBaseHooks.useResourceList)((0, _keychainKeyEndpoints.getKeychainKeysEndpoint)(keychainId));
};
var useKeychainKeyDelete = exports.useKeychainKeyDelete = function useKeychainKeyDelete(keychainKeyId) {
	return (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyEndpoint)(keychainKeyId), 'DELETE', { snackMessageToken: 'key_delete_success' });
};
var useKeychainKeyCreate = exports.useKeychainKeyCreate = function useKeychainKeyCreate(keychainId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyCreateEndpoint)(keychainId), 'POST', { snackMessageToken: 'key_create_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (label, publicKey, expires) {
		var settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		return _doAction({
			label: label,
			publicKey: publicKey,
			expires: expires
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useKeychainKeyCheck = exports.useKeychainKeyCheck = function useKeychainKeyCheck() {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyCheckEndpoint)(), 'POST'),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (publicKey) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({
			publicKey: publicKey
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};