'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useSettingUpload = exports.useSetting = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _getSettingEndpoints = require('../../enpoints/setting/getSettingEndpoints');

var _react = require('react');

var useSetting = exports.useSetting = function useSetting(settingId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _getSettingEndpoints.getSettingEndpoint)(settingId), params, restSettings);
};
var useSettingUpload = exports.useSettingUpload = function useSettingUpload(settingId) {
	var _useFileUploader = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader2 = _slicedToArray(_useFileUploader, 3),
	    _doUpload = _useFileUploader2[0],
	    uploading = _useFileUploader2[1],
	    progress = _useFileUploader2[2];

	var doAction = (0, _react.useCallback)(function (file, key) {
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		return _doUpload((0, _getSettingEndpoints.getSettingUploadEndpoint)(settingId), file, { key: key }, settingsOverride);
	}, [settingId]); //eslint-disable-line

	return [doAction, uploading, progress];
};