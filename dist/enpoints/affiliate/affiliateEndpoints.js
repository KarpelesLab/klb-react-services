"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAffiliateEndpoint = exports.getAffiliateEndpoint = function getAffiliateEndpoint(userId) {
  return "Affiliate/" + userId;
};
var getUserWalletsEndpoint = exports.getUserWalletsEndpoint = function getUserWalletsEndpoint(userId) {
  return "User/" + userId + "/Wallet";
};