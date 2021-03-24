'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserWallets = exports.useAffiliate = undefined;

var _useBaseHooks = require('../useBaseHooks');

var _affiliateEndpoints = require('../../enpoints/affiliate/affiliateEndpoints');

var useAffiliate = exports.useAffiliate = function useAffiliate(id) {
  return (0, _useBaseHooks.useResource)((0, _affiliateEndpoints.getAffiliateEndpoint)(id));
};
var useUserWallets = exports.useUserWallets = function useUserWallets(userId) {
  return (0, _useBaseHooks.useResourceList)((0, _affiliateEndpoints.getUserWalletsEndpoint)(userId));
};