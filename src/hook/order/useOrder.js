import { useAction, useResource, useResourceList } from '../useBaseHooks';
import { useCallback }                             from 'react';
import { getOrderEndpoint, getOrdersEndpoint }     from '../../enpoints/order/orderEndpoints';

export const useOrders = () => useResourceList(getOrdersEndpoint());
export const useOrder = orderId => useResource(getOrderEndpoint(orderId));
export const useOrderCreate = () => {
	const [_doAction, loading] = useAction(getOrdersEndpoint(), 'POST', { snackMessageToken: 'success_order_created' });

	const doAction = useCallback((request, settingsOverride = {}) => _doAction({ request: request, }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
