'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useCatalogProductsSearch = exports.useCatalogProduct = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _catalogProductEndpoints = require('../../../enpoints/catalog/product/catalogProductEndpoints');

var useCatalogProduct = exports.useCatalogProduct = function useCatalogProduct(productId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResource)((0, _catalogProductEndpoints.getCatalogProductEndpoint)(productId), params);
};
var useCatalogProductsSearch = exports.useCatalogProductsSearch = function useCatalogProductsSearch() {
	return (0, _useBaseHooks.useResourceList)((0, _catalogProductEndpoints.getCatalogProductsSearchEndpoint)());
};