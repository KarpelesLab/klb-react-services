import { useAction, useResource, useResourceList } from '../useBaseHooks';
import { useCallback }                             from 'react';
import {
	getShellAddTag,
	getShellInviteEndpoint,
	getShellRemoveTag,
	getShellTransfer,
	useUserBillingCreateWithMethod,
	useUserLocationCreate
}                                                  from '../..';
import {
	getShellCancelEndpoint,
	getShellDeleteIpAddressEndpoint,
	getShellEndpoint,
	getShellRebootEndpoint,
	getShellReconfigureEndpoint,
	getShellsEndpoint,
	getShellSetBillingEndpoint,
	getShellSetInitialOsEndpoint,
	getShellStartEndpoint,
	getShellStopEndpoint
}                                                  from '../../enpoints/shell/shellEndpoints';

export const useShells = (restSettings = null) => useResourceList(getShellsEndpoint(), restSettings);
export const useShell = (shellId, params = null, restSettings = null) => useResource(getShellEndpoint(shellId), params, restSettings);
export const useShellUpdate = shellId => useAction(getShellEndpoint(shellId), 'PATCH', { snackMessageToken: 'shell_update_success' });
export const useShellDeleteIp = shellId => {
	const [_doAction, loading] = useAction(getShellDeleteIpAddressEndpoint(shellId), 'POST', { snackMessageToken: 'shell_ip_delete_success' });

	const doAction = useCallback((shellIp, settingsOverride = {}) => _doAction({ shellIp: shellIp }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellSetInitialOS = shellId => {
	const [_doAction, loading] = useAction(getShellSetInitialOsEndpoint(shellId), 'POST', { snackMessageToken: 'shell_initial_os_set_success' });

	const doAction = useCallback((osId, keychainId = null, settingsOverride = {}) => _doAction({
		Shell_OS__: osId,
		Keychain__: keychainId
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellReconfigure = shellId => useAction(getShellReconfigureEndpoint(shellId), 'POST');
export const useShellCancelSubscription = shellId => useAction(getShellCancelEndpoint(shellId), 'POST', { snackMessageToken: 'shell_subscription_cancel_success' });
export const useShellStart = shellId => useAction(getShellStartEndpoint(shellId), 'POST', { snackMessageToken: 'shell_action_start_success' });
export const useShellStop = shellId => useAction(getShellStopEndpoint(shellId), 'POST', { snackMessageToken: 'shell_action_stop_success' });
export const useShellReboot = shellId => useAction(getShellRebootEndpoint(shellId), 'POST', { snackMessageToken: 'shell_action_reboot_success' });
export const useShellSetBilling = shellId => {
	const [_doAction, loading] = useAction(getShellSetBillingEndpoint(shellId), 'POST', { snackMessageToken: 'shell_billing_set_success' });

	const doAction = useCallback((billingId, settingsOverride = {}) => _doAction({ User_Billing__: billingId }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useShellCreateAndSetBilling = shellId => {
	const [_setBilling, settingBilling] = useAction(getShellSetBillingEndpoint(shellId), 'POST', { snackMessageToken: 'shell_billing_set_success' });
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

export const useShellCreate = () => {
	const [_doAction, loading] = useAction(getShellsEndpoint(), 'POST', { snackMessageToken: 'shell_create_success' });

	const doAction = useCallback((productId, label, userBilling, preferences = null, osId = null, size = null, settingsOverride = {}) => {
		const params = {
			Catalog_Product__: productId,
			Label: label,
		};

		if (preferences) params['Preferences'] = preferences;
		if (osId) params['Shell_OS__'] = osId;
		if (size) params['Size'] = size;
		if (typeof userBilling === 'string' || userBilling instanceof String)
			params['User_Billing__'] = userBilling;
		else
			params['User_Billing'] = userBilling;

		return _doAction(params, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellAddTag = shellId => {
	const [_doAction, loading] = useAction(getShellAddTag(shellId), 'POST', { snackMessageToken: 'shell_add_tag_success' });

	const doAction = useCallback((tag, settingsOverride = {}) => _doAction({ tag: tag }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellRemoveTag = shellId => {
	const [_doAction, loading] = useAction(getShellRemoveTag(shellId), 'POST', { snackMessageToken: 'shell_remove_tag_success' });

	const doAction = useCallback((tag, settingsOverride = {}) => _doAction({ tag: tag }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellTransfer = shellId => {
	const [_doAction, loading] = useAction(getShellTransfer(shellId), 'POST');

	const doAction = useCallback(
		(toEmail, settingsOverride = {}) =>
			_doAction({ toEmail: toEmail }, settingsOverride),
		[]); //eslint-disable-line

	return [doAction, loading];
};
export const useShellInvite = shellId => {
	const [_doAction, loading] = useAction(getShellInviteEndpoint(shellId), 'POST');

	const doAction = useCallback(
		(expires = null, emails = [], settingsOverride = {}) =>
			_doAction({ emails: emails, expires: expires }, settingsOverride),
		[]); //eslint-disable-line

	return [doAction, loading];
};
