'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserBillingMethodUpdate = exports.useUserBillingMethods = undefined;

var _useBaseHooks = require('../useBaseHooks');

var _userBillingMethodEndpoints = require('../../enpoints/user/userBillingMethodEndpoints');

var useUserBillingMethods = exports.useUserBillingMethods = function useUserBillingMethods(billingId) {
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResourceList)((0, _userBillingMethodEndpoints.getUserBillingMethodsEndpoint)(billingId), restSettings);
};
var useUserBillingMethodUpdate = exports.useUserBillingMethodUpdate = function useUserBillingMethodUpdate(methodId) {
	return (0, _useBaseHooks.useAction)((0, _userBillingMethodEndpoints.getUserBillingMethodChangeEndpoint)(methodId), 'POST', { snackMessageToken: 'billing_method_changed' });
};