import { useAction, useResourceList } from '../useBaseHooks';
import {
	getUserBillingMethodChangeEndpoint,
	getUserBillingMethodsEndpoint
}                                     from '../../enpoints/user/userBillingMethodEndpoints';

export const useUserBillingMethods = (billingId, restSettings = null) => useResourceList(getUserBillingMethodsEndpoint(billingId), restSettings);
export const useUserBillingMethodUpdate = methodId => useAction(getUserBillingMethodChangeEndpoint(methodId), 'POST', { snackMessageToken: 'billing_method_changed' });
