"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUpdateOperatingSystem = exports.useOperatingSystems = exports.useOperatingSystemImages = exports.useOperatingSystemDelete = exports.useOperatingSystemCreateFromShell = exports.useOperatingSystemCreateFromFile = exports.useOperatingSystemCreateEmpty = exports.useOperatingSystemAddImageFromShell = exports.useOperatingSystemAddImageFromFile = exports.useOperatingSystem = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _react = require("react");
var _shellOsEndpoints = require("../../../enpoints/shell/os/shellOsEndpoints");
const useOperatingSystems = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _shellOsEndpoints.getShellOsesEndpoint)(), restSettings);
};
exports.useOperatingSystems = useOperatingSystems;
const useOperatingSystem = function (osId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), params, restSettings);
};
exports.useOperatingSystem = useOperatingSystem;
const useOperatingSystemImages = function (osId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _shellOsEndpoints.getShellOsImagesEndpoint)(osId), restSettings);
};
exports.useOperatingSystemImages = useOperatingSystemImages;
const useOperatingSystemCreateEmpty = () => {
  const [_doCreate, loading] = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsCreateEmptyEndpoint)(), 'POST', {
    snackMessageToken: 'custom_os_create_success'
  });
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (names, family, boot, cpu, isPublic) {
    let descriptions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    let shortDescriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    let purpose = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'unknown';
    let beta = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'Y';
    let icon = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
    let settingsOverride = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : {};
    const params = {
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
    let settings = settingsOverride;
    if (icon) settings = {
      innerThen: os => icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os
    };
    return _doCreate(params, settings);
  }, []); //eslint-disable-line

  return [doAction, loading || uploading, progress];
};
exports.useOperatingSystemCreateEmpty = useOperatingSystemCreateEmpty;
const useOperatingSystemCreateFromShell = () => {
  const [_doCreate, loading] = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsImportEndpoint)(), 'POST', {
    snackMessageToken: 'custom_os_create_success'
  });
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (shellVolumeId, names, family, boot, cpu, isPublic) {
    let descriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    let shortDescriptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
    let purpose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'unknown';
    let beta = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'Y';
    let icon = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    let settingsOverride = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : {};
    const params = {
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
    let settings = settingsOverride;
    if (icon) settings = {
      innerThen: os => icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os
    };
    return _doCreate(params, settings);
  }, []); //eslint-disable-line

  return [doAction, loading || uploading, progress];
};
exports.useOperatingSystemCreateFromShell = useOperatingSystemCreateFromShell;
const useOperatingSystemCreateFromFile = () => {
  const [_doUploadMain, loadingMain, progress] = (0, _useBaseHooks.useFileUploader)({
    snackMessageToken: 'custom_os_create_success'
  });
  const [_doImageUpload, loadingImage, progressImage] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (file, names, family, boot, cpu, isPublic) {
    let descriptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
    let shortDescriptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
    let purpose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 'unknown';
    let beta = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 'Y';
    let icon = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
    let settingsOverride = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : {};
    const params = {
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
    let settings = settingsOverride;
    if (icon) settings = {
      innerThen: os => icon ? _doImageUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os
    };
    return _doUploadMain((0, _shellOsEndpoints.getShellOsUploadEndpoint)(), file, params, settings);
  }, []); //eslint-disable-line

  return [doAction, loadingMain || loadingImage, progress ? progress : progressImage];
};
exports.useOperatingSystemCreateFromFile = useOperatingSystemCreateFromFile;
const useUpdateOperatingSystem = osId => {
  const [_doUpdate, loading] = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), 'PATCH', {
    snackMessageToken: 'custom_os_update_success'
  });
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (data) {
    let icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let settings = settingsOverride;
    if (icon) settings = {
      innerThen: os => icon ? _doUpload((0, _shellOsEndpoints.getShellOsUploadImageEndpoint)(os.Shell_OS__), icon, {}, settingsOverride) : os
    };
    return _doUpdate(data, settings);
  }, []); //eslint-disable-line

  return [doAction, loading || uploading, progress];
};
exports.useUpdateOperatingSystem = useUpdateOperatingSystem;
const useOperatingSystemAddImageFromShell = osId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsImageImportEndpoint)(osId), 'POST', {
    snackMessageToken: 'custom_os_image_added_success'
  });
  const doAction = (0, _react.useCallback)(function (shellVolumeId) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      Shell_Volume__: shellVolumeId
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useOperatingSystemAddImageFromShell = useOperatingSystemAddImageFromShell;
const useOperatingSystemAddImageFromFile = osId => {
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)({
    snackMessageToken: 'custom_os_image_added_success'
  });
  const doAction = (0, _react.useCallback)(function (file) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doUpload((0, _shellOsEndpoints.getOsImageUploadEndpoint)(osId), file, {}, settingsOverride);
  }, [osId]); //eslint-disable-line

  return [doAction, uploading, progress];
};
exports.useOperatingSystemAddImageFromFile = useOperatingSystemAddImageFromFile;
const useOperatingSystemDelete = osId => (0, _useBaseHooks.useAction)((0, _shellOsEndpoints.getShellOsEndpoint)(osId), 'DELETE', {
  snackMessageToken: 'custom_os_delete_success'
});
exports.useOperatingSystemDelete = useOperatingSystemDelete;