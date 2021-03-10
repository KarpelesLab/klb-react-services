'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserLocationUpdate = exports.useUserLocation = undefined;

var _useBaseHooks = require('../useBaseHooks');

var useUserLocation = exports.useUserLocation = function useUserLocation(locationId) {
  return (0, _useBaseHooks.useResource)('User/Location/' + locationId);
};
var useUserLocationUpdate = exports.useUserLocationUpdate = function useUserLocationUpdate(locationId) {
  return (0, _useBaseHooks.useAction)('User/Location/' + locationId, 'PATCH', { snackMessageToken: 'user_location_update_success' });
};