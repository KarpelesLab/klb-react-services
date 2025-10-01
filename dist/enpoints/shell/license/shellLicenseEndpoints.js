"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellLicensesEndpoint = exports.getShellLicenseEndpoint = void 0;
const getShellLicensesEndpoint = shellId => `Shell/${shellId}/License`;
exports.getShellLicensesEndpoint = getShellLicensesEndpoint;
const getShellLicenseEndpoint = function (licenseId) {
  let shellId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return shellId ? `Shell/${shellId}/License/${licenseId}` : `Shell/License/${licenseId}`;
};
exports.getShellLicenseEndpoint = getShellLicenseEndpoint;