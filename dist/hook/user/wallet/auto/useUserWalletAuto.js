'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserWalletAutos = undefined;

var _useBaseHooks = require('../../../useBaseHooks');

var _userWalletAutoEndpoints = require('../../../../enpoints/user/wallet/auto/userWalletAutoEndpoints');

var useUserWalletAutos = exports.useUserWalletAutos = function useUserWalletAutos() {
  var walletId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _userWalletAutoEndpoints.getUserWalletAutosEndpoint)(walletId), restSettings);
};