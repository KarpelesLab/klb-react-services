"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAffiliateEndpoint = exports.getAffiliateEndpoint = function getAffiliateEndpoint(affiliateId) {
  return "Affiliate/" + affiliateId;
};
var getUserWalletsEndpoint = exports.getUserWalletsEndpoint = function getUserWalletsEndpoint(userId) {
  return "User/" + userId + "/Wallet";
};
var getAffiliateExportOrdersEndpoint = exports.getAffiliateExportOrdersEndpoint = function getAffiliateExportOrdersEndpoint(affiliateId) {
  return "Affiliate/" + affiliateId + ":orderExport";
};