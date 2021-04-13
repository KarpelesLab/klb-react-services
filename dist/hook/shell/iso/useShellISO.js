'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useShellMountISO = exports.useShellISODelete = exports.useShellISOUpload = exports.useShellISO = exports.useShellISOs = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../../useBaseHooks');

var _ = require('../../..');

var _react = require('react');

var useShellISOs = exports.useShellISOs = function useShellISOs() {
	return (0, _useBaseHooks.useResourceList)((0, _.getShellISOsEndpoint)());
};
var useShellISO = exports.useShellISO = function useShellISO(isoId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResource)((0, _.getShellISOEndpoint)(isoId), params);
};
var useShellISOUpload = exports.useShellISOUpload = function useShellISOUpload() {
	var _useFileUploader = (0, _useBaseHooks.useFileUploader)({ snackMessageToken: 'shell_iso_create_success' }),
	    _useFileUploader2 = _slicedToArray(_useFileUploader, 3),
	    _doUploadMain = _useFileUploader2[0],
	    loadingMain = _useFileUploader2[1],
	    progress = _useFileUploader2[2];

	var doAction = (0, _react.useCallback)(function (file) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		return _doUploadMain((0, _.getShellISOUploadEndpoint)(), file, {}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loadingMain, progress];
};
var useShellISODelete = exports.useShellISODelete = function useShellISODelete(isoId) {
	return (0, _useBaseHooks.useAction)((0, _.getShellISOEndpoint)(isoId), 'DELETE', { snackMessageToken: 'shell_iso_delete_success' });
};
var useShellMountISO = exports.useShellMountISO = function useShellMountISO(isoId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _.getShellMountISOEndpoint)(isoId), 'POST', { snackMessageToken: 'shell_iso_mount_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (shellId) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ Shell__: shellId }, settingsOverride);
	}, [_doAction]); //eslint-disable-line

	return [doAction, loading];
};