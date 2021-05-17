'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useCatalogCartItemRemove = exports.useCatalogCartReset = exports.useCatalogCartCreateOrder = exports.useCatalogCartProcess = exports.useCatalogCart = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../../useBaseHooks');

var _catalogCartEndpoints = require('../../../enpoints/catalog/cart/catalogCartEndpoints');

var _react = require('react');

var _ = require('../../..');

var useCatalogCart = exports.useCatalogCart = function useCatalogCart() {
	var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _catalogCartEndpoints.getCatalogCartEndpoint)(cartId), params, restSettings);
};
var useCatalogCartProcess = exports.useCatalogCartProcess = function useCatalogCartProcess() {
	var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';

	var _useAction = (0, _useBaseHooks.useAction)((0, _catalogCartEndpoints.getCatalogCartProcessEndpoint)(cartId), 'POST', { snackMessageToken: 'cart_product_added_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (request) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ request: request }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useCatalogCartCreateOrder = exports.useCatalogCartCreateOrder = function useCatalogCartCreateOrder() {
	var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
	return (0, _useBaseHooks.useAction)((0, _catalogCartEndpoints.getCatalogCartCreateOrderEndpoint)(cartId), 'POST', { snackMessageToken: 'cart_order_created_success' });
};
var useCatalogCartReset = exports.useCatalogCartReset = function useCatalogCartReset() {
	var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useAction)((0, _.getCatalogCartResetEndpoint)(cartId), 'POST', restSettings);
};
var useCatalogCartItemRemove = exports.useCatalogCartItemRemove = function useCatalogCartItemRemove(cartItem) {
	var cartId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '@';

	var _useAction3 = (0, _useBaseHooks.useAction)((0, _.getCatalogCartItemSetQuantityEndpoint)(cartId), 'POST', { snackMessageToken: 'cart_product_removed_success' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function () {
		var settingsOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		return _doAction({
			key: cartItem,
			quantity: 0
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};