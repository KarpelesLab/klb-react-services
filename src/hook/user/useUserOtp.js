import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';

export const useUserOTPs = () => useResourceList('User/Otp');
export const useUserOTPCreate = () => {
	const [_doAction, loading] = useAction('User/Otp', 'POST');

	const doAction = useCallback(name => _doAction({ Name: name, }), []); //eslint-disable-line

	return [doAction, loading];
};
export const useUserOTPDelete = otpId => useAction(`User/Otp/${otpId}`, 'DELETE', { snackMessageToken: 'otp_delete_success' });
export const useUserOTPAssociate = otpId => {
	const [_doAction, loading] = useAction(`User/Otp/${otpId}:associate`, 'POST', { snackMessageToken: 'otp_associate_success' });

	const doAction = useCallback((code, name, settingsOverride = {}) => _doAction({
		otp: code,
		name: name
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useUserOTPSetAction = otpId => {
	const [_doAction, loading] = useAction(`User/Otp/${otpId}:set`, 'POST');

	const doAction = useCallback((action, settingsOverride = {}) => _doAction({ action: action }, { snackMessageToken: `otp_action_set_${action}_success`, ...settingsOverride }), []); //eslint-disable-line

	return [doAction, loading];
};
export const useUserOTPUnsetAction = otpId => {
	const [_doAction, loading] = useAction(`User/Otp/${otpId}:unset`, 'POST');

	const doAction = useCallback((action, settingsOverride = {}) => _doAction({ action: action }, { snackMessageToken: `otp_action_unset_${action}_success`, ...settingsOverride }), []); //eslint-disable-line

	return [doAction, loading];
};
