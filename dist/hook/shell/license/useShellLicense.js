"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellLicenses = exports.useShellLicense = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _ = require("../../..");
const useShellLicenses = function (shellId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _.getShellLicensesEndpoint)(shellId), restSettings);
};
exports.useShellLicenses = useShellLicenses;
const useShellLicense = function (licenseId) {
  let shellId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let restSettings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellLicenseEndpoint)(licenseId, shellId), params, restSettings);
};
exports.useShellLicense = useShellLicense;