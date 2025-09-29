"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeychainKeysEndpoint = exports.getKeychainKeyEndpoint = exports.getKeychainKeyCreateEndpoint = exports.getKeychainKeyCheckEndpoint = void 0;
const getKeychainKeysEndpoint = keychainId => `Keychain/${keychainId}/Key`;
exports.getKeychainKeysEndpoint = getKeychainKeysEndpoint;
const getKeychainKeyEndpoint = keychainKeyId => `Keychain/Key/${keychainKeyId}`;
exports.getKeychainKeyEndpoint = getKeychainKeyEndpoint;
const getKeychainKeyCreateEndpoint = keychainId => `Keychain/${keychainId}/Key:create`;
exports.getKeychainKeyCreateEndpoint = getKeychainKeyCreateEndpoint;
const getKeychainKeyCheckEndpoint = () => 'Keychain/Key:check';
exports.getKeychainKeyCheckEndpoint = getKeychainKeyCheckEndpoint;