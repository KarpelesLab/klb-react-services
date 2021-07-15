'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellOrganizationFleet = undefined;

var _useBaseHooks = require('../../../useBaseHooks');

var _ = require('../../../..');

var useShellOrganizationFleet = exports.useShellOrganizationFleet = function useShellOrganizationFleet(fleetId) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellOrganizationFleetEndpoint)(fleetId), params, restSettings);
};