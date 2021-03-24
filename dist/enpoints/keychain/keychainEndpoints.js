'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getKeychainsEndpoint = exports.getKeychainsEndpoint = function getKeychainsEndpoint() {
  return 'Keychain';
};
var getKeychainEndpoint = exports.getKeychainEndpoint = function getKeychainEndpoint(keychainId) {
  return 'Keychain/' + keychainId;
};