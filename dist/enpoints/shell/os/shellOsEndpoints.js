'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellOsesEndpoint = exports.getShellOsesEndpoint = function getShellOsesEndpoint() {
  return 'Shell/OS';
};
var getShellOsEndpoint = exports.getShellOsEndpoint = function getShellOsEndpoint(osId) {
  return 'Shell/OS/' + osId;
};
var getShellOsImagesEndpoint = exports.getShellOsImagesEndpoint = function getShellOsImagesEndpoint(osId) {
  return 'Shell/OS/' + osId + '/Image';
};
var getShellOsCreateEmptyEndpoint = exports.getShellOsCreateEmptyEndpoint = function getShellOsCreateEmptyEndpoint() {
  return 'Shell/OS:createEmpty';
};
var getShellOsUploadImageEndpoint = exports.getShellOsUploadImageEndpoint = function getShellOsUploadImageEndpoint(osId) {
  return 'Shell/OS/' + osId + ':uploadImage';
};
var getShellOsImportEndpoint = exports.getShellOsImportEndpoint = function getShellOsImportEndpoint() {
  return 'Shell/OS:import';
};
var getShellOsUploadEndpoint = exports.getShellOsUploadEndpoint = function getShellOsUploadEndpoint() {
  return 'Shell/OS:upload';
};
var getShellOsImageImportEndpoint = exports.getShellOsImageImportEndpoint = function getShellOsImageImportEndpoint(osId) {
  return 'Shell/OS/' + osId + '/Image:import';
};
var getOsImageUploadEndpoint = exports.getOsImageUploadEndpoint = function getOsImageUploadEndpoint(osId) {
  return 'Shell/OS/' + osId + '/Image:upload';
};