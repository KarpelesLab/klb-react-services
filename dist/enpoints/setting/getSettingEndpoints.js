"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSettingUploadEndpoint = exports.getSettingEndpoint = void 0;
const getSettingEndpoint = settingId => `Setting/${settingId}`;
exports.getSettingEndpoint = getSettingEndpoint;
const getSettingUploadEndpoint = settingId => `Setting/${settingId}:uploadFile`;
exports.getSettingUploadEndpoint = getSettingUploadEndpoint;