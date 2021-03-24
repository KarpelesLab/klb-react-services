"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getKeychainKeysEndpoint = exports.getKeychainKeysEndpoint = function getKeychainKeysEndpoint(keychainId) {
  return "Keychain/" + keychainId + "/Key";
};
var getKeychainKeyEndpoint = exports.getKeychainKeyEndpoint = function getKeychainKeyEndpoint(keychainKeyId) {
  return "Keychain/Key/" + keychainKeyId;
};
var getKeychainKeyCreateEndpoint = exports.getKeychainKeyCreateEndpoint = function getKeychainKeyCreateEndpoint(keychainId) {
  return "Keychain/" + keychainId + "/Key:create";
};