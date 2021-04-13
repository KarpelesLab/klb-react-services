import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getCatalogProductEndpoint,
	getCatalogProductsSearchEndpoint
}                                       from '../../../enpoints/catalog/product/catalogProductEndpoints';

export const useCatalogProduct = (productId, params = null) => useResource(getCatalogProductEndpoint(productId), params);
export const useCatalogProductsSearch = () => useResourceList(getCatalogProductsSearchEndpoint());
