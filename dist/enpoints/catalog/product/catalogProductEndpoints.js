'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCatalogProductEndpoint = exports.getCatalogProductEndpoint = function getCatalogProductEndpoint(productId) {
  return 'Catalog/Product/' + productId;
};
var getCatalogProductsSearchEndpoint = exports.getCatalogProductsSearchEndpoint = function getCatalogProductsSearchEndpoint() {
  return 'Catalog/Product:search';
};