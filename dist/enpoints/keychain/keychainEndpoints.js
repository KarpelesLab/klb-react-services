"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeychainsEndpoint = exports.getKeychainEndpoint = void 0;
const getKeychainsEndpoint = () => 'Keychain';
exports.getKeychainsEndpoint = getKeychainsEndpoint;
const getKeychainEndpoint = keychainId => `Keychain/${keychainId}`;
exports.getKeychainEndpoint = getKeychainEndpoint;