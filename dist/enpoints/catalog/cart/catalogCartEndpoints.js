"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCatalogCartResetEndpoint = exports.getCatalogCartProcessEndpoint = exports.getCatalogCartItemSetQuantityEndpoint = exports.getCatalogCartEndpoint = exports.getCatalogCartCreateOrderEndpoint = void 0;
const getCatalogCartEndpoint = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return `Catalog/Cart/${cartId}`;
};
exports.getCatalogCartEndpoint = getCatalogCartEndpoint;
const getCatalogCartProcessEndpoint = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return `Catalog/Cart/${cartId}:process`;
};
exports.getCatalogCartProcessEndpoint = getCatalogCartProcessEndpoint;
const getCatalogCartCreateOrderEndpoint = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return `Catalog/Cart/${cartId}:createOrder`;
};
exports.getCatalogCartCreateOrderEndpoint = getCatalogCartCreateOrderEndpoint;
const getCatalogCartResetEndpoint = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return `Catalog/Cart/${cartId}:reset`;
};
exports.getCatalogCartResetEndpoint = getCatalogCartResetEndpoint;
const getCatalogCartItemSetQuantityEndpoint = function () {
  let cartId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '@';
  return `Catalog/Cart/${cartId}:setQuantity`;
};
exports.getCatalogCartItemSetQuantityEndpoint = getCatalogCartItemSetQuantityEndpoint;