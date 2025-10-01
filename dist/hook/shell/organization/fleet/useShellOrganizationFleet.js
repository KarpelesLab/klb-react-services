"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellOrganizationFleet = void 0;
var _useBaseHooks = require("../../../useBaseHooks");
var _ = require("../../../..");
const useShellOrganizationFleet = function (fleetId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellOrganizationFleetEndpoint)(fleetId), params, restSettings);
};
exports.useShellOrganizationFleet = useShellOrganizationFleet;