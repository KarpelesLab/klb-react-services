'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useCoreKeychainKeyCreate = exports.useCoreKeychainKeyDelete = exports.useCoreKeychainKeys = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('./useBaseHooks');

var _react = require('react');

var useCoreKeychainKeys = exports.useCoreKeychainKeys = function useCoreKeychainKeys(keychainId) {
	return (0, _useBaseHooks.useResourceList)('Keychain/' + keychainId + '/Key');
};
var useCoreKeychainKeyDelete = exports.useCoreKeychainKeyDelete = function useCoreKeychainKeyDelete(keychainKeyId) {
	return (0, _useBaseHooks.useAction)('Keychain/Key/' + keychainKeyId, 'DELETE', { snackMessageToken: 'key_delete_success' });
};
var useCoreKeychainKeyCreate = exports.useCoreKeychainKeyCreate = function useCoreKeychainKeyCreate(keychainId) {
	var _useAction = (0, _useBaseHooks.useAction)('Keychain/' + keychainId + '/Key:create', 'POST', { snackMessageToken: 'key_create_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (label, publicKey, expires) {
		return _doAction({
			label: label,
			publicKey: publicKey,
			expires: expires
		});
	}, []); //eslint-disable-line

	return [doAction, loading];
};