import { useAction, useResourceList } from '../useBaseHooks';

export const useUserBillingMethods = billingId => useResourceList(`User/Billing/${billingId}/Method`);
export const useUserBillingMethodUpdate = methodId => useAction(`User/Billing/Method/${methodId}:change`, 'POST', { snackMessageToken: 'billing_method_changed' });
