import { useAction, useResource, useResourceList }                      from '../useBaseHooks';
import { useCallback }                                                  from 'react';
import { getOrderEndpoint, getOrderProcessEndpoint, getOrdersEndpoint } from '../../enpoints/order/orderEndpoints';

export const useOrders = () => useResourceList(getOrdersEndpoint());
export const useOrder = (orderId, params = null, restSettings = null) => useResource(getOrderEndpoint(orderId), params, restSettings);
export const useOrderCreate = () => {
	const [_doAction, loading] = useAction(getOrdersEndpoint(), 'POST', { snackMessageToken: 'success_order_created' });

	const doAction = useCallback((request, settingsOverride = {}) => _doAction({ request: request, }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useOrderProcess = orderId => {
	const [_doAction, loading] = useAction(getOrderProcessEndpoint(orderId), 'POST');

	const doAction = useCallback((session = null, method = null, methodData = {}, settingsOverride = {}) => {
		let params = {};
		if (session && method) {
			params['session'] = session;
			params['method'] = method;
			params = { ...params, ...methodData };
		}
		return _doAction(params, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
