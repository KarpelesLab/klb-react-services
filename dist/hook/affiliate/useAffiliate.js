'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserWallets = exports.useAffiliate = undefined;

var _useBaseHooks = require('../useBaseHooks');

var _affiliateEndpoints = require('../../enpoints/affiliate/affiliateEndpoints');

var useAffiliate = exports.useAffiliate = function useAffiliate(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResource)((0, _affiliateEndpoints.getAffiliateEndpoint)(id), params);
};
var useUserWallets = exports.useUserWallets = function useUserWallets(userId) {
  return (0, _useBaseHooks.useResourceList)((0, _affiliateEndpoints.getUserWalletsEndpoint)(userId));
};