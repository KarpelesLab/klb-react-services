"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellMountISO = exports.useShellISOs = exports.useShellISOUpload = exports.useShellISODelete = exports.useShellISO = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _ = require("../../..");
var _react = require("react");
const useShellISOs = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _.getShellISOsEndpoint)(), restSettings);
};
exports.useShellISOs = useShellISOs;
const useShellISO = function (isoId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellISOEndpoint)(isoId), params, restSettings);
};
exports.useShellISO = useShellISO;
const useShellISOUpload = () => {
  const [_doUploadMain, loadingMain, progress] = (0, _useBaseHooks.useFileUploader)({
    snackMessageToken: 'shell_iso_create_success'
  });
  const doAction = (0, _react.useCallback)(function (file) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doUploadMain((0, _.getShellISOUploadEndpoint)(), file, {}, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loadingMain, progress];
};
exports.useShellISOUpload = useShellISOUpload;
const useShellISODelete = isoId => (0, _useBaseHooks.useAction)((0, _.getShellISOEndpoint)(isoId), 'DELETE', {
  snackMessageToken: 'shell_iso_delete_success'
});
exports.useShellISODelete = useShellISODelete;
const useShellMountISO = isoId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getShellMountISOEndpoint)(isoId), 'POST', {
    snackMessageToken: 'shell_iso_mount_success'
  });
  const doAction = (0, _react.useCallback)(function (shellId) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      Shell__: shellId
    }, settingsOverride);
  }, [_doAction]); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellMountISO = useShellMountISO;