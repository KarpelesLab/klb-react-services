"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellMountISOEndpoint = exports.getShellISOsEndpoint = exports.getShellISOUploadEndpoint = exports.getShellISOEndpoint = void 0;
const getShellISOsEndpoint = () => 'Shell/ISO';
exports.getShellISOsEndpoint = getShellISOsEndpoint;
const getShellISOEndpoint = isoID => `Shell/ISO/${isoID}`;
exports.getShellISOEndpoint = getShellISOEndpoint;
const getShellISOUploadEndpoint = () => 'Shell/ISO:upload';
exports.getShellISOUploadEndpoint = getShellISOUploadEndpoint;
const getShellMountISOEndpoint = isoID => `Shell/ISO/${isoID}:mount`;
exports.getShellMountISOEndpoint = getShellMountISOEndpoint;