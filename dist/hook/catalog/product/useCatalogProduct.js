"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCatalogProductsSearch = exports.useCatalogProduct = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _catalogProductEndpoints = require("../../../enpoints/catalog/product/catalogProductEndpoints");
const useCatalogProduct = function (productId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _catalogProductEndpoints.getCatalogProductEndpoint)(productId), params, restSettings);
};
exports.useCatalogProduct = useCatalogProduct;
const useCatalogProductsSearch = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _catalogProductEndpoints.getCatalogProductsSearchEndpoint)(), restSettings);
};
exports.useCatalogProductsSearch = useCatalogProductsSearch;