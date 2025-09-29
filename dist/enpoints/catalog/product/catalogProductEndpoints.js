"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCatalogProductsSearchEndpoint = exports.getCatalogProductEndpoint = void 0;
const getCatalogProductEndpoint = productId => `Catalog/Product/${productId}`;
exports.getCatalogProductEndpoint = getCatalogProductEndpoint;
const getCatalogProductsSearchEndpoint = () => 'Catalog/Product:search';
exports.getCatalogProductsSearchEndpoint = getCatalogProductsSearchEndpoint;