import { useAction }   from '../useBaseHooks';
import { useCallback } from 'react';

export const useTwoStepValidation = () => {
	const [_doAction, loading] = useAction('Util/TwoStep:validate', 'POST');

	const doAction = useCallback((session, code) => _doAction({ session: session, code: code }), []); //eslint-disable-line

	return [doAction, loading];
};
