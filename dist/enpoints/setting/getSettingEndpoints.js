"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSettingEndpoint = exports.getSettingEndpoint = function getSettingEndpoint(settingId) {
  return "Setting/" + settingId;
};
var getSettingUploadEndpoint = exports.getSettingUploadEndpoint = function getSettingUploadEndpoint(settingId) {
  return "Setting/" + settingId + ":uploadFile";
};