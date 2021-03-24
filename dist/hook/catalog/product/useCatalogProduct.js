'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useCatalogProductsSearch = exports.useCatalogProduct = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _catalogProductEndpoints = require('../../../enpoints/catalog/product/catalogProductEndpoints');

var useCatalogProduct = exports.useCatalogProduct = function useCatalogProduct(productId) {
	return (0, _useBaseHooks.useResource)((0, _catalogProductEndpoints.getCatalogProductEndpoint)(productId));
};
var useCatalogProductsSearch = exports.useCatalogProductsSearch = function useCatalogProductsSearch() {
	return (0, _useBaseHooks.useResourceList)((0, _catalogProductEndpoints.getCatalogProductsSearchEndpoint)());
};