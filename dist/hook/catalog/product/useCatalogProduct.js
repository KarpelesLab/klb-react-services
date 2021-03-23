'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCatalogProductsSearch = exports.useCatalogProduct = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var useCatalogProduct = exports.useCatalogProduct = function useCatalogProduct(productId) {
  return (0, _useBaseHooks.useResource)('Catalog/Product/' + productId);
};
var useCatalogProductsSearch = exports.useCatalogProductsSearch = function useCatalogProductsSearch() {
  return (0, _useBaseHooks.useResourceList)('Catalog/Product:search');
};