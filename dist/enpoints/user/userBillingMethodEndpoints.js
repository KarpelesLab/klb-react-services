"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserBillingMethodsEndpoint = exports.getUserBillingMethodChangeEndpoint = void 0;
const getUserBillingMethodsEndpoint = billingId => `User/Billing/${billingId}/Method`;
exports.getUserBillingMethodsEndpoint = getUserBillingMethodsEndpoint;
const getUserBillingMethodChangeEndpoint = methodId => `User/Billing/Method/${methodId}:change`;
exports.getUserBillingMethodChangeEndpoint = getUserBillingMethodChangeEndpoint;