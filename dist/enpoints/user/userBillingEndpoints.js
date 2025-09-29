"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserBillingsEndpoint = exports.getUserBillingEndpoint = exports.getUserBillingCreateEndpoint = void 0;
const getUserBillingsEndpoint = userId => `User/${userId}/Billing`;
exports.getUserBillingsEndpoint = getUserBillingsEndpoint;
const getUserBillingEndpoint = billingId => `User/Billing/${billingId}`;
exports.getUserBillingEndpoint = getUserBillingEndpoint;
const getUserBillingCreateEndpoint = () => 'User/Billing:create';
exports.getUserBillingCreateEndpoint = getUserBillingCreateEndpoint;