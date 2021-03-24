'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserBillingsEndpoint = exports.getUserBillingsEndpoint = function getUserBillingsEndpoint(userId) {
  return 'User/' + userId + '/Billing';
};
var getUserBillingEndpoint = exports.getUserBillingEndpoint = function getUserBillingEndpoint(billingId) {
  return 'User/Billing/' + billingId;
};
var getUserBillingCreateEndpoint = exports.getUserBillingCreateEndpoint = function getUserBillingCreateEndpoint() {
  return 'User/Billing:create';
};