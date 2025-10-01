"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeychainKeys = exports.useKeychainKeyDelete = exports.useKeychainKeyCreate = exports.useKeychainKeyCheck = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _keychainKeyEndpoints = require("../../enpoints/keychain/keychainKeyEndpoints");
const useKeychainKeys = function (keychainId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _keychainKeyEndpoints.getKeychainKeysEndpoint)(keychainId), restSettings);
};
exports.useKeychainKeys = useKeychainKeys;
const useKeychainKeyDelete = keychainKeyId => (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyEndpoint)(keychainKeyId), 'DELETE', {
  snackMessageToken: 'key_delete_success'
});
exports.useKeychainKeyDelete = useKeychainKeyDelete;
const useKeychainKeyCreate = keychainId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyCreateEndpoint)(keychainId), 'POST', {
    snackMessageToken: 'key_create_success'
  });
  const doAction = (0, _react.useCallback)(function (label, publicKey, expires) {
    let settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return _doAction({
      label: label,
      publicKey: publicKey,
      expires: expires
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useKeychainKeyCreate = useKeychainKeyCreate;
const useKeychainKeyCheck = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _keychainKeyEndpoints.getKeychainKeyCheckEndpoint)(), 'POST');
  const doAction = (0, _react.useCallback)(function (publicKey) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      publicKey: publicKey
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useKeychainKeyCheck = useKeychainKeyCheck;