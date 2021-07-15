'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserBillingCreateWithMethod = exports.useUserBillingUpdateLocation = exports.useUserBilling = exports.useUserBillingUpdate = exports.useUserBillings = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _useUserLocation = require('./useUserLocation');

var _userBillingEndpoints = require('../../enpoints/user/userBillingEndpoints');

var useUserBillings = exports.useUserBillings = function useUserBillings(userId) {
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResourceList)((0, _userBillingEndpoints.getUserBillingsEndpoint)(userId), restSettings);
};
var useUserBillingUpdate = exports.useUserBillingUpdate = function useUserBillingUpdate(billingId) {
	return (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), 'PATCH');
};
var useUserBilling = exports.useUserBilling = function useUserBilling(billingId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), params, restSettings);
};
var useUserBillingUpdateLocation = exports.useUserBillingUpdateLocation = function useUserBillingUpdateLocation(billingId, locationId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingEndpoint)(billingId), 'PATCH'),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _updateBilling = _useAction2[0],
	    updatingBilling = _useAction2[1];

	var _useUserLocationUpdat = (0, _useUserLocation.useUserLocationUpdate)(locationId),
	    _useUserLocationUpdat2 = _slicedToArray(_useUserLocationUpdat, 2),
	    _updateLocation = _useUserLocationUpdat2[0],
	    updatingLocation = _useUserLocationUpdat2[1];

	var doAction = (0, _react.useCallback)(function (data) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		return _updateLocation(data, {
			snackMessageToken: null,
			innerThen: function innerThen(location) {
				return _updateBilling({ User_Location__: location.User_Location__ }, _extends({
					snackMessageToken: 'user_location_update_success'
				}, settingsOverride));
			}
		});
	}, []); //eslint-disable-line

	return [doAction, updatingBilling || updatingLocation];
};

var useUserBillingCreateWithMethod = exports.useUserBillingCreateWithMethod = function useUserBillingCreateWithMethod() {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _userBillingEndpoints.getUserBillingCreateEndpoint)(), 'POST', { snackMessageToken: 'user_billing_created' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (label, userLocationId, method) {
		var methodData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var settingsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
		return _doAction(_extends({
			Label: label,
			User_Location__: userLocationId,
			method: method
		}, methodData), settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};