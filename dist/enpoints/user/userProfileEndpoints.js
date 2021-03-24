"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserProfileEndpoint = exports.getUserProfileEndpoint = function getUserProfileEndpoint(userId) {
  return "User/" + userId + "/Profile";
};
var getUserProfileAddImageEndpoint = exports.getUserProfileAddImageEndpoint = function getUserProfileAddImageEndpoint(userId) {
  return "User/" + userId + "/Profile:addImage";
};