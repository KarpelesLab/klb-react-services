'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCoreUserWallets = exports.useCoreAffiliate = undefined;

var _useBaseHooks = require('./useBaseHooks');

var useCoreAffiliate = exports.useCoreAffiliate = function useCoreAffiliate(id) {
  return (0, _useBaseHooks.useResource)('Affiliate/' + id);
};
var useCoreUserWallets = exports.useCoreUserWallets = function useCoreUserWallets(userId) {
  return (0, _useBaseHooks.useResourceList)('User/' + userId + '/Wallet');
};