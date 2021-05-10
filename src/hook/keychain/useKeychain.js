import { useAction, useResource, useResourceList }   from '../useBaseHooks';
import { useCallback }                               from 'react';
import { getKeychainEndpoint, getKeychainsEndpoint } from '../../enpoints/keychain/keychainEndpoints';

export const useKeychains = (restSettings = null) => useResourceList(getKeychainsEndpoint(), restSettings);
export const useKeychain = (keychainId, params = null, restSettings = null) => useResource(getKeychainEndpoint(keychainId), params, restSettings);
export const useKeychainUpdate = keychainId => useAction(getKeychainEndpoint(keychainId), 'PATCH', { snackMessageToken: 'keychain_update_success' });
export const useKeychainCreate = () => {
	const [_doAction, loading] = useAction(getKeychainsEndpoint(), 'POST', { snackMessageToken: 'keychain_create_success' });

	const doAction = useCallback((label, settingsOverride = {}) => _doAction({ Label: label }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
