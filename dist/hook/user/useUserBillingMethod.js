"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserBillingMethods = exports.useUserBillingMethodUpdate = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _userBillingMethodEndpoints = require("../../enpoints/user/userBillingMethodEndpoints");
const useUserBillingMethods = function (billingId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _userBillingMethodEndpoints.getUserBillingMethodsEndpoint)(billingId), restSettings);
};
exports.useUserBillingMethods = useUserBillingMethods;
const useUserBillingMethodUpdate = methodId => (0, _useBaseHooks.useAction)((0, _userBillingMethodEndpoints.getUserBillingMethodChangeEndpoint)(methodId), 'POST', {
  snackMessageToken: 'billing_method_changed'
});
exports.useUserBillingMethodUpdate = useUserBillingMethodUpdate;