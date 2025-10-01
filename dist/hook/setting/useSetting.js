"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSettingUpload = exports.useSetting = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _getSettingEndpoints = require("../../enpoints/setting/getSettingEndpoints");
var _react = require("react");
const useSetting = function (settingId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _getSettingEndpoints.getSettingEndpoint)(settingId), params, restSettings);
};
exports.useSetting = useSetting;
const useSettingUpload = settingId => {
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (file, key) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doUpload((0, _getSettingEndpoints.getSettingUploadEndpoint)(settingId), file, {
      key: key
    }, settingsOverride);
  }, [settingId]); //eslint-disable-line

  return [doAction, uploading, progress];
};
exports.useSettingUpload = useSettingUpload;