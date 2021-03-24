'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useOrderCreate = exports.useOrder = exports.useOrders = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _orderEndpoints = require('../../enpoints/order/orderEndpoints');

var useOrders = exports.useOrders = function useOrders() {
	return (0, _useBaseHooks.useResourceList)((0, _orderEndpoints.getOrdersEndpoint)());
};
var useOrder = exports.useOrder = function useOrder(orderId) {
	return (0, _useBaseHooks.useResource)((0, _orderEndpoints.getOrderEndpoint)(orderId));
};
var useOrderCreate = exports.useOrderCreate = function useOrderCreate() {
	var _useAction = (0, _useBaseHooks.useAction)((0, _orderEndpoints.getOrdersEndpoint)(), 'POST', { snackMessageToken: 'success_order_created' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (request) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ request: request }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};