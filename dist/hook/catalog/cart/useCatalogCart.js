"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCatalogCartReset = exports.useCatalogCartProcess = exports.useCatalogCartItemRemove = exports.useCatalogCartCreateOrder = exports.useCatalogCart = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _catalogCartEndpoints = require("../../../enpoints/catalog/cart/catalogCartEndpoints");
var _react = require("react");
var _ = require("../../..");
const useCatalogCart = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _catalogCartEndpoints.getCatalogCartEndpoint)(cartId), params, restSettings);
};
exports.useCatalogCart = useCatalogCart;
const useCatalogCartProcess = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _catalogCartEndpoints.getCatalogCartProcessEndpoint)(cartId), 'POST', {
    snackMessageToken: 'cart_product_added_success'
  });
  const doAction = (0, _react.useCallback)(function (request) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      request: request
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useCatalogCartProcess = useCatalogCartProcess;
const useCatalogCartCreateOrder = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return (0, _useBaseHooks.useAction)((0, _catalogCartEndpoints.getCatalogCartCreateOrderEndpoint)(cartId), 'POST', {
    snackMessageToken: 'cart_order_created_success'
  });
};
exports.useCatalogCartCreateOrder = useCatalogCartCreateOrder;
const useCatalogCartReset = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useAction)((0, _.getCatalogCartResetEndpoint)(cartId), 'POST', restSettings);
};
exports.useCatalogCartReset = useCatalogCartReset;
const useCatalogCartItemRemove = function (cartItem) {
  let cartId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '@';
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getCatalogCartItemSetQuantityEndpoint)(cartId), 'POST', {
    snackMessageToken: 'cart_product_removed_success'
  });
  const doAction = (0, _react.useCallback)(function () {
    let settingsOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _doAction({
      key: cartItem,
      quantity: 0
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useCatalogCartItemRemove = useCatalogCartItemRemove;