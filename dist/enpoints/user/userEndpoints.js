'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserSetPasswordEndpoint = exports.getUserSetPasswordEndpoint = function getUserSetPasswordEndpoint(userId) {
  return 'User/' + userId + ':setPassword';
};
var getUserSetEmailEndpoint = exports.getUserSetEmailEndpoint = function getUserSetEmailEndpoint(userId) {
  return 'User/' + userId + ':setEmail';
};
var getUserLogoutEndpoint = exports.getUserLogoutEndpoint = function getUserLogoutEndpoint() {
  return 'User/@:logout';
};
var getUserFlowEndpoint = exports.getUserFlowEndpoint = function getUserFlowEndpoint() {
  return 'User:flow';
};
var getUserEndpoint = exports.getUserEndpoint = function getUserEndpoint(userId) {
  return 'User/' + userId;
};
var getUserSetDefaultEndpoint = exports.getUserSetDefaultEndpoint = function getUserSetDefaultEndpoint(userId) {
  return 'User/' + userId + ':setDefaultLocation';
};