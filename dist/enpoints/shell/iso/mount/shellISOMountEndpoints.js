"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellISOUnmountEndpoint = exports.getShellISOMountsEndpoint = exports.getShellISOMountEndpoint = void 0;
const getShellISOMountsEndpoint = () => 'Shell/ISO/Mount';
exports.getShellISOMountsEndpoint = getShellISOMountsEndpoint;
const getShellISOMountEndpoint = mountId => `Shell/ISO/Mount/${mountId}`;
exports.getShellISOMountEndpoint = getShellISOMountEndpoint;
const getShellISOUnmountEndpoint = mountId => `Shell/ISO/Mount/${mountId}:unmount`;
exports.getShellISOUnmountEndpoint = getShellISOUnmountEndpoint;