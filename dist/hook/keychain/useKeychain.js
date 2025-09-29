"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeychains = exports.useKeychainUpdate = exports.useKeychainCreate = exports.useKeychain = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _keychainEndpoints = require("../../enpoints/keychain/keychainEndpoints");
const useKeychains = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _keychainEndpoints.getKeychainsEndpoint)(), restSettings);
};
exports.useKeychains = useKeychains;
const useKeychain = function (keychainId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _keychainEndpoints.getKeychainEndpoint)(keychainId), params, restSettings);
};
exports.useKeychain = useKeychain;
const useKeychainUpdate = keychainId => (0, _useBaseHooks.useAction)((0, _keychainEndpoints.getKeychainEndpoint)(keychainId), 'PATCH', {
  snackMessageToken: 'keychain_update_success'
});
exports.useKeychainUpdate = useKeychainUpdate;
const useKeychainCreate = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _keychainEndpoints.getKeychainsEndpoint)(), 'POST', {
    snackMessageToken: 'keychain_create_success'
  });
  const doAction = (0, _react.useCallback)(function (label) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      Label: label
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useKeychainCreate = useKeychainCreate;