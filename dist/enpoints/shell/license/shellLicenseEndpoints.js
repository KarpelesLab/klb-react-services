"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellLicensesEndpoint = exports.getShellLicensesEndpoint = function getShellLicensesEndpoint(shellId) {
  return "Shell/" + shellId + "/License";
};
var getShellLicenseEndpoint = exports.getShellLicenseEndpoint = function getShellLicenseEndpoint(licenseId) {
  var shellId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return shellId ? "Shell/" + shellId + "/License/" + licenseId : "Shell/License/" + licenseId;
};