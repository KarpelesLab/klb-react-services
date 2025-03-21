'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useOperatingSystemDelete = exports.useOperatingSystemAddImageFromFile = exports.useOperatingSystemAddImageFromShell = exports.useUpdateOperatingSystem = exports.useOperatingSystemCreateFromFile = exports.useOperatingSystemCreateFromShell = exports.useOperatingSystemCreateEmpty = exports.useOperatingSystemImages = exports.useOperatingSystem = exports.useOperatingSystems = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../../useBaseHooks');

var _react = require('react');

var _shellOsEndpoints = require('../../../enpoints/shell/os/shellOsEndpoints');

var useOperatingSystems = exports.useOperatingSystems = function useOperatingSystems() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return (0, _useBaseHooks.useResourceList)((0, _shellOsEndpoints.getShellOsesEndpoint)(), restSettings);
};
var useOperatingSystem = exports.useOperatingSystem = function useOperatingSystem(osId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), params, restSettings);
};
var useOperatingSystemImages = exports.useOperatingSystemImages = function useOperatingSystemImages(osId) {
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResourceList)((0, _shellOsEndpoints.getShellOsImagesEndpoint)(osId), restSettings);
};
var useOperatingSystemCreateEmpty = exports.useOperatingSystemCreateEmpty = function useOperatingSystemCreateEmpty() {
	var _useAction = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsCreateEmptyEndpoint)(), 'POST', { snackMessageToken: 'custom_os_create_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doCreate = _useAction2[0],
	    loading = _useAction2[1];

	var _useFileUploader = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader2 = _slicedToArray(_useFileUploader, 3),
	    _doUpload = _useFileUploader2[0],
	    uploading = _useFileUploader2[1],
	    progress = _useFileUploader2[2];

	var doAction = (0, _react.useCallback)(function (names, family, boot, cpu, isPublic) {
		var descriptions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
		var shortDescriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
		var purpose = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'unknown';
		var beta = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'Y';
		var icon = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
		var settingsOverride = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : {};

		var params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
			beta: beta
		};

		var settings = settingsOverride;
		if (icon) settings = { innerThen: function innerThen(os) {
				return icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os;
			} };

		return _doCreate(params, settings);
	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

var useOperatingSystemCreateFromShell = exports.useOperatingSystemCreateFromShell = function useOperatingSystemCreateFromShell() {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsImportEndpoint)(), 'POST', { snackMessageToken: 'custom_os_create_success' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doCreate = _useAction4[0],
	    loading = _useAction4[1];

	var _useFileUploader3 = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader4 = _slicedToArray(_useFileUploader3, 3),
	    _doUpload = _useFileUploader4[0],
	    uploading = _useFileUploader4[1],
	    progress = _useFileUploader4[2];

	var doAction = (0, _react.useCallback)(function (shellVolumeId, names, family, boot, cpu, isPublic) {
		var descriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
		var shortDescriptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
		var purpose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'unknown';
		var beta = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'Y';
		var icon = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
		var settingsOverride = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : {};

		var params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			Shell_Volume__: shellVolumeId,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
			beta: beta
		};

		var settings = settingsOverride;
		if (icon) settings = { innerThen: function innerThen(os) {
				return icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os;
			} };

		return _doCreate(params, settings);
	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

var useOperatingSystemCreateFromFile = exports.useOperatingSystemCreateFromFile = function useOperatingSystemCreateFromFile() {
	var _useFileUploader5 = (0, _useBaseHooks.useFileUploader)({ snackMessageToken: 'custom_os_create_success' }),
	    _useFileUploader6 = _slicedToArray(_useFileUploader5, 3),
	    _doUploadMain = _useFileUploader6[0],
	    loadingMain = _useFileUploader6[1],
	    progress = _useFileUploader6[2];

	var _useFileUploader7 = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader8 = _slicedToArray(_useFileUploader7, 3),
	    _doImageUpload = _useFileUploader8[0],
	    loadingImage = _useFileUploader8[1],
	    progressImage = _useFileUploader8[2];

	var doAction = (0, _react.useCallback)(function (file, names, family, boot, cpu, isPublic) {
		var descriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
		var shortDescriptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
		var purpose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'unknown';
		var beta = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'Y';
		var icon = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
		var settingsOverride = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : {};

		var params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
			beta: beta
		};

		var settings = settingsOverride;

		if (icon) settings = { innerThen: function innerThen(os) {
				return icon ? _doImageUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os;
			} };

		return _doUploadMain((0, _shellOsEndpoints.getShellOsUploadEndpoint)(), file, params, settings);
	}, []); //eslint-disable-line

	return [doAction, loadingMain || loadingImage, progress ? progress : progressImage];
};

var useUpdateOperatingSystem = exports.useUpdateOperatingSystem = function useUpdateOperatingSystem(osId) {
	var _useAction5 = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), 'PATCH', { snackMessageToken: 'custom_os_update_success' }),
	    _useAction6 = _slicedToArray(_useAction5, 2),
	    _doUpdate = _useAction6[0],
	    loading = _useAction6[1];

	var _useFileUploader9 = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader10 = _slicedToArray(_useFileUploader9, 3),
	    _doUpload = _useFileUploader10[0],
	    uploading = _useFileUploader10[1],
	    progress = _useFileUploader10[2];

	var doAction = (0, _react.useCallback)(function (data) {
		var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var settings = settingsOverride;

		if (icon) settings = { innerThen: function innerThen(os) {
				return icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os;
			} };

		return _doUpdate(data, settings);
	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

var useOperatingSystemAddImageFromShell = exports.useOperatingSystemAddImageFromShell = function useOperatingSystemAddImageFromShell(osId) {
	var _useAction7 = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsImageImportEndpoint)(osId), 'POST', { snackMessageToken: 'custom_os_image_added_success' }),
	    _useAction8 = _slicedToArray(_useAction7, 2),
	    _doAction = _useAction8[0],
	    loading = _useAction8[1];

	var doAction = (0, _react.useCallback)(function (shellVolumeId) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ Shell_Volume__: shellVolumeId }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useOperatingSystemAddImageFromFile = exports.useOperatingSystemAddImageFromFile = function useOperatingSystemAddImageFromFile(osId) {
	var _useFileUploader11 = (0, _useBaseHooks.useFileUploader)({ snackMessageToken: 'custom_os_image_added_success' }),
	    _useFileUploader12 = _slicedToArray(_useFileUploader11, 3),
	    _doUpload = _useFileUploader12[0],
	    uploading = _useFileUploader12[1],
	    progress = _useFileUploader12[2];

	var doAction = (0, _react.useCallback)(function (file) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		return _doUpload((0, _shellOsEndpoints.getOsImageUploadEndpoint)(osId), file, {}, settingsOverride);
	}, [osId]); //eslint-disable-line

	return [doAction, uploading, progress];
};
var useOperatingSystemDelete = exports.useOperatingSystemDelete = function useOperatingSystemDelete(osId) {
	return (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), 'DELETE', { snackMessageToken: 'custom_os_delete_success' });
};