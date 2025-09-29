"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserWalletsEndpoint = exports.getAffiliateExportOrdersEndpoint = exports.getAffiliateEndpoint = void 0;
const getAffiliateEndpoint = affiliateId => `Affiliate/${affiliateId}`;
exports.getAffiliateEndpoint = getAffiliateEndpoint;
const getUserWalletsEndpoint = userId => `User/${userId}/Wallet`;
exports.getUserWalletsEndpoint = getUserWalletsEndpoint;
const getAffiliateExportOrdersEndpoint = affiliateId => `Affiliate/${affiliateId}:orderExport`;
exports.getAffiliateExportOrdersEndpoint = getAffiliateExportOrdersEndpoint;