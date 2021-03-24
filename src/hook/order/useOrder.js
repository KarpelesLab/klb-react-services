import { useAction, useResource, useResourceList } from '../useBaseHooks';
import { useCallback }                             from 'react';

export const useOrders = () => useResourceList('Order');
export const useOrder = orderId => useResource(`Order/${orderId}`);
export const useOrderCreate = () => {
	const [_doAction, loading] = useAction('Order', 'POST', { snackMessageToken: 'success_order_created' });

	const doAction = useCallback((request, settingsOverride = {}) => _doAction({ request: request, }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
