import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getCatalogProductEndpoint,
	getCatalogProductsSearchEndpoint
}                                       from '../../../enpoints/catalog/product/catalogProductEndpoints';

export const useCatalogProduct = (productId, params = null, restSettings = null) => useResource(getCatalogProductEndpoint(productId), params, restSettings);
export const useCatalogProductsSearch = (restSettings = null) => useResourceList(getCatalogProductsSearchEndpoint(), restSettings);
