'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCatalogCartEndpoint = exports.getCatalogCartEndpoint = function getCatalogCartEndpoint() {
  var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return 'Catalog/Cart/' + cartId;
};
var getCatalogCartProcessEndpoint = exports.getCatalogCartProcessEndpoint = function getCatalogCartProcessEndpoint() {
  var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return 'Catalog/Cart/' + cartId + ':process';
};
var getCatalogCartCreateOrderEndpoint = exports.getCatalogCartCreateOrderEndpoint = function getCatalogCartCreateOrderEndpoint() {
  var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return 'Catalog/Cart/' + cartId + ':createOrder';
};
var getCatalogCartResetEndpoint = exports.getCatalogCartResetEndpoint = function getCatalogCartResetEndpoint() {
  var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return 'Catalog/Cart/' + cartId + ':reset';
};
var getCatalogCartItemSetQuantityEndpoint = exports.getCatalogCartItemSetQuantityEndpoint = function getCatalogCartItemSetQuantityEndpoint() {
  var cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return 'Catalog/Cart/' + cartId + ':setQuantity';
};