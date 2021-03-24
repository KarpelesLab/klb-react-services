"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserBillingMethodsEndpoint = exports.getUserBillingMethodsEndpoint = function getUserBillingMethodsEndpoint(billingId) {
  return "User/Billing/" + billingId + "/Method";
};
var getUserBillingMethodChangeEndpoint = exports.getUserBillingMethodChangeEndpoint = function getUserBillingMethodChangeEndpoint(methodId) {
  return "User/Billing/Method/" + methodId + ":change";
};