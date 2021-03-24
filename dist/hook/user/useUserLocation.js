'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserLocationCreate = exports.useUserLocationUpdate = exports.useUserLocation = undefined;

var _useBaseHooks = require('../useBaseHooks');

var _userLocationEndpoints = require('../../enpoints/user/userLocationEndpoints');

var useUserLocation = exports.useUserLocation = function useUserLocation(locationId) {
  return (0, _useBaseHooks.useResource)((0, _userLocationEndpoints.getUserLocationEndpoint)(locationId));
};
var useUserLocationUpdate = exports.useUserLocationUpdate = function useUserLocationUpdate(locationId) {
  return (0, _useBaseHooks.useAction)((0, _userLocationEndpoints.getUserLocationEndpoint)(locationId), 'PATCH', { snackMessageToken: 'user_location_update_success' });
};
var useUserLocationCreate = exports.useUserLocationCreate = function useUserLocationCreate(userId) {
  return (0, _useBaseHooks.useAction)((0, _userLocationEndpoints.getUserLocationsEndpoint)(userId), 'POST', { snackMessageToken: 'user_location_create_success' });
};