"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGeoIpLookup = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _ = require("../../..");
var _geoIpEndpoints = require("../../../enpoints/thirdParty/geoip/geoIpEndpoints");
const useGeoIpLookup = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResource)((0, _geoIpEndpoints.getGeoIpEndpoint)(), null, restSettings);
};
exports.useGeoIpLookup = useGeoIpLookup;