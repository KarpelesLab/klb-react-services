'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserBillingMethodUpdate = exports.useUserBillingMethods = undefined;

var _useBaseHooks = require('../useBaseHooks');

var useUserBillingMethods = exports.useUserBillingMethods = function useUserBillingMethods(billingId) {
  return (0, _useBaseHooks.useResourceList)('User/Billing/' + billingId + '/Method');
};
var useUserBillingMethodUpdate = exports.useUserBillingMethodUpdate = function useUserBillingMethodUpdate(methodId) {
  return (0, _useBaseHooks.useAction)('User/Billing/Method/' + methodId + ':change', 'POST', { snackMessageToken: 'billing_method_changed' });
};