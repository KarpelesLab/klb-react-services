import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';
import {
	getOAuth2ConsumerLinkEndpoint,
	getOAuth2ConsumerTokenEndpoint,
	getOAuth2ConsumerTokensEndpoint
}                                     from '../../enpoints/oauth2/oauthEndpoints';

export const useConsumerLink = consumerId => {
	const [_doAction, loading] = useAction(getOAuth2ConsumerLinkEndpoint(consumerId), 'POST', {
		rawResult: true,
		catchRedirect: false
	});

	const doAction = useCallback((return_to, settingsOverride = {}) => _doAction({ return_to: return_to, }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
export const useConsumerTokenUnlink = tokenId => useAction(getOAuth2ConsumerTokenEndpoint(tokenId), 'DELETE', { snackMessageToken: 'profile_oauth2_token_remove_success' });
export const useConsumerTokens = () => useResourceList(getOAuth2ConsumerTokensEndpoint());
