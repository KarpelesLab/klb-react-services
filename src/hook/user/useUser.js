import { useAction }   from '../useBaseHooks';
import { useCallback } from 'react';

export const useUserChangePassword = userId => {
	const [_doAction, loading] = useAction(`User/${userId}:setPassword`, 'POST', { snackMessageToken: 'success_password_changed' });

	const doAction = useCallback((old_password, password, settingsOverride = {}) => _doAction({
		old_password: old_password,
		password: password
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useUserSetEmail = userId => {
	const [_doAction, loading] = useAction(`User/${userId}:setEmail`, 'POST', { snackMessageToken: 'success_email_changed' });

	const doAction = useCallback((email, password = null, settingsOverride = {}) => {
		const params = { email };
		if (password)
			params.current_password = password;

		return _doAction(params, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

export const useUserLogout = () => useAction('User/@:logout', 'POST');
