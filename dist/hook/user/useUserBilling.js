'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserBillingUpdateLocation = exports.useUserBillingUpdate = exports.useUserBillings = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _useUserLocation = require('./useUserLocation');

var useUserBillings = exports.useUserBillings = function useUserBillings(userId) {
	return (0, _useBaseHooks.useResourceList)('User/' + userId + '/Billing');
};
var useUserBillingUpdate = exports.useUserBillingUpdate = function useUserBillingUpdate(billingId) {
	return (0, _useBaseHooks.useAction)('User/Billing/' + billingId, 'PATCH');
};
var useUserBillingUpdateLocation = exports.useUserBillingUpdateLocation = function useUserBillingUpdateLocation(billingId, locationId) {
	var _useAction = (0, _useBaseHooks.useAction)('User/Billing/' + billingId, 'PATCH'),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _updateBilling = _useAction2[0],
	    updatingBilling = _useAction2[1];

	var _useUserLocationUpdat = (0, _useUserLocation.useUserLocationUpdate)(locationId),
	    _useUserLocationUpdat2 = _slicedToArray(_useUserLocationUpdat, 2),
	    _updateLocation = _useUserLocationUpdat2[0],
	    updatingLocation = _useUserLocationUpdat2[1];

	var doAction = (0, _react.useCallback)(function (data) {
		return _updateLocation(data, {
			snackMessageToken: null,
			innerThen: function innerThen(location) {
				return _updateBilling({ User_Location__: location.User_Location__ }, {
					snackMessageToken: 'user_location_update_success'
				});
			}
		});
	}, []); //eslint-disable-line

	return [doAction, updatingBilling || updatingLocation];
};