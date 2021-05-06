import { useAction, useResource } from '../../useBaseHooks';
import {
	getCatalogCartCreateOrderEndpoint,
	getCatalogCartEndpoint,
	getCatalogCartProcessEndpoint
}                                 from '../../../enpoints/catalog/cart/catalogCartEndpoints';
import { useCallback }            from 'react';

export const useCatalogCart = (cartId = '@', params = null, restSettings = null) => useResource(getCatalogCartEndpoint(cartId), params, restSettings);
export const useCatalogCartProcess = (cartId = '@') => {
	const [_doAction, loading] = useAction(getCatalogCartProcessEndpoint(cartId), 'POST', { snackMessageToken: 'cart_product_added_success' });

	const doAction = useCallback((request, settingsOverride = {}) => _doAction({ request: request }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useCatalogCartCreateOrder = (cartId = '@') => useAction(getCatalogCartCreateOrderEndpoint(cartId), 'POST', { snackMessageToken: 'cart_order_created_success' });
