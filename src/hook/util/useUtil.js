import { useAction } from '../useBaseHooks';
import { useCallback } from 'react';

export const useTwoStepValidation = () => {
	const [_doAction, loading] = useAction('Util/TwoStep:validate', 'POST');

	const doAction = useCallback((session, code, settingsOverride = {}) => _doAction({
		session: session,
		code: code
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
