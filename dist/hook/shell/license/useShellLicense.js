'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellLicense = exports.useShellLicenses = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _ = require('../../..');

var useShellLicenses = exports.useShellLicenses = function useShellLicenses(shellId) {
  var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _.getShellLicensesEndpoint)(shellId), restSettings);
};
var useShellLicense = exports.useShellLicense = function useShellLicense(licenseId) {
  var shellId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var restSettings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellLicenseEndpoint)(licenseId, shellId), params, restSettings);
};