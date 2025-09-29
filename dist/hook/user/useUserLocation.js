"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserLocationUpdate = exports.useUserLocationCreate = exports.useUserLocation = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _userLocationEndpoints = require("../../enpoints/user/userLocationEndpoints");
const useUserLocation = function (locationId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _userLocationEndpoints.getUserLocationEndpoint)(locationId), params, restSettings);
};
exports.useUserLocation = useUserLocation;
const useUserLocationUpdate = locationId => (0, _useBaseHooks.useAction)((0, _userLocationEndpoints.getUserLocationEndpoint)(locationId), 'PATCH', {
  snackMessageToken: 'user_location_update_success'
});
exports.useUserLocationUpdate = useUserLocationUpdate;
const useUserLocationCreate = userId => (0, _useBaseHooks.useAction)((0, _userLocationEndpoints.getUserLocationsEndpoint)(userId), 'POST', {
  snackMessageToken: 'user_location_create_success'
});
exports.useUserLocationCreate = useUserLocationCreate;