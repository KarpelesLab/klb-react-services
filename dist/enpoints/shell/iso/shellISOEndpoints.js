'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellISOsEndpoint = exports.getShellISOsEndpoint = function getShellISOsEndpoint() {
  return 'Shell/ISO';
};
var getShellISOEndpoint = exports.getShellISOEndpoint = function getShellISOEndpoint(isoID) {
  return 'Shell/ISO/' + isoID;
};
var getShellISOUploadEndpoint = exports.getShellISOUploadEndpoint = function getShellISOUploadEndpoint() {
  return 'Shell/ISO:upload';
};
var getShellMountISOEndpoint = exports.getShellMountISOEndpoint = function getShellMountISOEndpoint(isoID) {
  return 'Shell/ISO/' + isoID + ':mount';
};