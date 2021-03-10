import { useResource }     from '../../../../dist/hook/useBaseHooks';
import { useResourceList } from '../../useBaseHooks';

export const useCatalogProduct = productId => useResource(`Catalog/Product/${productId}`);
export const useCatalogProductsSearch = () => useResourceList(`Catalog/Product:search`);
