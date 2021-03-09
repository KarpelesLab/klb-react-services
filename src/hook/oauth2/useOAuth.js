import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';

export const useConsumerLink = consumerId => {
	const [_doAction, loading] = useAction(`OAuth2/Consumer/${consumerId}:link`, 'POST', {
		rawResult: true,
		catchRedirect: false
	});

	const doAction = useCallback(return_to => _doAction({ return_to: return_to, }), []); //eslint-disable-line

	return [doAction, loading];
};
export const useConsumerTokenUnlink = tokenId => useAction(`OAuth2/Consumer/Token/${tokenId}`, 'DELETE', { snackMessageToken: 'profile_oauth2_token_remove_success' });
export const useConsumerTokens = () => useResourceList('OAuth2/Consumer/Token');
