'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellISOMountsEndpoint = exports.getShellISOMountsEndpoint = function getShellISOMountsEndpoint() {
  return 'Shell/ISO/Mount';
};
var getShellISOMountEndpoint = exports.getShellISOMountEndpoint = function getShellISOMountEndpoint(mountId) {
  return 'Shell/ISO/Mount/' + mountId;
};
var getShellISOUnmountEndpoint = exports.getShellISOUnmountEndpoint = function getShellISOUnmountEndpoint(mountId) {
  return 'Shell/ISO/Mount/' + mountId + ':unmount';
};