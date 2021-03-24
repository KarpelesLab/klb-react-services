import { useAction }                      from '../useBaseHooks';
import { useCallback }                    from 'react';
import { getUtilTwoStepValidateEndpoint } from '../../enpoints/util/utilEndpoints';

export const useTwoStepValidation = () => {
	const [_doAction, loading] = useAction(getUtilTwoStepValidateEndpoint(), 'POST');

	const doAction = useCallback((session, code, settingsOverride = {}) => _doAction({
		session: session,
		code: code
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
