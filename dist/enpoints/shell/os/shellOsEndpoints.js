"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellOsesEndpoint = exports.getShellOsUploadImageEndpoint = exports.getShellOsUploadEndpoint = exports.getShellOsImportEndpoint = exports.getShellOsImagesEndpoint = exports.getShellOsImageImportEndpoint = exports.getShellOsEndpoint = exports.getShellOsCreateEmptyEndpoint = exports.getOsImageUploadEndpoint = void 0;
const getShellOsesEndpoint = () => 'Shell/OS';
exports.getShellOsesEndpoint = getShellOsesEndpoint;
const getShellOsEndpoint = osId => `Shell/OS/${osId}`;
exports.getShellOsEndpoint = getShellOsEndpoint;
const getShellOsImagesEndpoint = osId => `Shell/OS/${osId}/Image`;
exports.getShellOsImagesEndpoint = getShellOsImagesEndpoint;
const getShellOsCreateEmptyEndpoint = () => 'Shell/OS:createEmpty';
exports.getShellOsCreateEmptyEndpoint = getShellOsCreateEmptyEndpoint;
const getShellOsUploadImageEndpoint = osId => `Shell/OS/${osId}:uploadImage`;
exports.getShellOsUploadImageEndpoint = getShellOsUploadImageEndpoint;
const getShellOsImportEndpoint = () => 'Shell/OS:import';
exports.getShellOsImportEndpoint = getShellOsImportEndpoint;
const getShellOsUploadEndpoint = () => 'Shell/OS:upload';
exports.getShellOsUploadEndpoint = getShellOsUploadEndpoint;
const getShellOsImageImportEndpoint = osId => `Shell/OS/${osId}/Image:import`;
exports.getShellOsImageImportEndpoint = getShellOsImageImportEndpoint;
const getOsImageUploadEndpoint = osId => `Shell/OS/${osId}/Image:upload`;
exports.getOsImageUploadEndpoint = getOsImageUploadEndpoint;