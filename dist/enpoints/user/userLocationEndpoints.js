"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserLocationEndpoint = exports.getUserLocationEndpoint = function getUserLocationEndpoint(locationId) {
  return "User/Location/" + locationId;
};
var getUserLocationsEndpoint = exports.getUserLocationsEndpoint = function getUserLocationsEndpoint(userId) {
  return "User/" + userId + "/Location";
};