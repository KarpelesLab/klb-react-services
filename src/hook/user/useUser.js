import { useAction }   from '../useBaseHooks';
import { useCallback } from 'react';
import {
	getUserLogoutEndpoint,
	getUserSetDefaultEndpoint,
	getUserSetEmailEndpoint,
	getUserSetPasswordEndpoint
}                      from '../../enpoints/user/userEndpoints';

export const useUserChangePassword = userId => {
	const [_doAction, loading] = useAction(getUserSetPasswordEndpoint(userId), 'POST', { snackMessageToken: 'success_password_changed' });

	const doAction = useCallback((old_password, password, settingsOverride = {}) => _doAction({
		old_password: old_password,
		password: password
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useUserSetEmail = userId => {
	const [_doAction, loading] = useAction(getUserSetEmailEndpoint(userId), 'POST', { snackMessageToken: 'success_email_changed' });

	const doAction = useCallback((email, password = null, settingsOverride = {}) => {
		const params = { email };
		if (password)
			params.current_password = password;

		return _doAction(params, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

export const useUserLogout = () => useAction(getUserLogoutEndpoint(), 'POST');

export const useUserSetDefaultLocation = userId => {
	const [_doAction, loading] = useAction(getUserSetDefaultEndpoint(userId), 'POST', { snackMessageToken: 'user_default_location_set_success' });

	const doAction = useCallback((userLocationId, type, settingsOverride = {}) => _doAction({
		User_Location__: userLocationId,
		type: type
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
