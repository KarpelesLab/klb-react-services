"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserLocationsEndpoint = exports.getUserLocationEndpoint = void 0;
const getUserLocationEndpoint = locationId => `User/Location/${locationId}`;
exports.getUserLocationEndpoint = getUserLocationEndpoint;
const getUserLocationsEndpoint = userId => `User/${userId}/Location`;
exports.getUserLocationsEndpoint = getUserLocationsEndpoint;