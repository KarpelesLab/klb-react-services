import { useAction, useResource, useResourceList }               from '../useBaseHooks';
import { useCallback }                                           from 'react';
import { useUserBillingCreateWithMethod, useUserLocationCreate } from '../..';

export const useShells = () => useResourceList('Shell');
export const useShell = shellId => useResource(`Shell/${shellId}`);
export const useShellUpdate = shellId => useAction(`Shell/${shellId}`, 'PATCH', { snackMessageToken: 'shell_update_success' });
export const useShellDeleteIp = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:deleteIpAddress`, 'POST', { snackMessageToken: 'shell_ip_delete_success' });

	const doAction = useCallback((shellIp, settingsOverride = {}) => _doAction({ shellIp: shellIp }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellSetInitialOS = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:setInitialOs`, 'POST', { snackMessageToken: 'shell_initial_os_set_success' });

	const doAction = useCallback((osId, settingsOverride = {}) => _doAction({ Shell_OS__: osId }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellReconfigure = shellId => useAction(`Shell/${shellId}:reconfigure`, 'POST');
export const useShellCancelSubscription = shellId => useAction(`Shell/${shellId}:cancel`, 'POST', { snackMessageToken: 'shell_subscription_cancel_success' });
export const useShellStart = shellId => useAction(`Shell/${shellId}:start`, 'POST', { snackMessageToken: 'shell_action_start_success' });
export const useShellStop = shellId => useAction(`Shell/${shellId}:stop`, 'POST', { snackMessageToken: 'shell_action_stop_success' });
export const useShellReboot = shellId => useAction(`Shell/${shellId}:reboot`, 'POST', { snackMessageToken: 'shell_action_reboot_success' });
export const useShellSetBilling = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:setBilling`, 'POST', { snackMessageToken: 'shell_billing_set_success' });

	const doAction = useCallback((billingId, settingsOverride = {}) => _doAction({ User_Billing__: billingId }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useShellCreateAndSetBilling = shellId => {
	const [_setBilling, settingBilling] = useAction(`Shell/${shellId}:setBilling`, 'POST', { snackMessageToken: 'shell_billing_set_success' });
	const [_createLocation, creatingLocation] = useUserLocationCreate('@');
	const [_createBilling, creatingBilling] = useUserBillingCreateWithMethod('@');

	const doAction = useCallback((locationData, { billingLabel, billingMethod, billingMethodData }, settingsOverride = {}) => {
		return _createLocation(locationData, {
			snackMessageToken: null,
			innerThen: location => {
				return _createBilling(billingLabel, location.User_Location__, billingMethod, billingMethodData, {
					snackMessageToken: null,
					innerThen: billing => {
						return _setBilling({ User_Billing__: billing.User_Billing__ }, settingsOverride);
					}
				});
			}
		});
	}, []); //eslint-disable-line

	return [doAction, settingBilling | creatingLocation | creatingBilling];
};
