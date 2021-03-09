'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserWallets = exports.useAffiliate = undefined;

var _useBaseHooks = require('../useBaseHooks');

var useAffiliate = exports.useAffiliate = function useAffiliate(id) {
  return (0, _useBaseHooks.useResource)('Affiliate/' + id);
};
var useUserWallets = exports.useUserWallets = function useUserWallets(userId) {
  return (0, _useBaseHooks.useResourceList)('User/' + userId + '/Wallet');
};