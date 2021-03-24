import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getCatalogProductEndpoint,
	getCatalogProductsSearchEndpoint
}                                       from '../../../enpoints/catalog/product/catalogProductEndpoints';

export const useCatalogProduct = productId => useResource(getCatalogProductEndpoint(productId));
export const useCatalogProductsSearch = () => useResourceList(getCatalogProductsSearchEndpoint());
