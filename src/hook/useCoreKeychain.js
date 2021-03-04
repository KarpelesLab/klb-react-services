import { useAction, useResource, useResourceList } from './useBaseHooks';
import { useCallback }                             from 'react';

export const useCoreKeychains = () => useResourceList('Keychain');
export const useCoreKeychain = keychainId => useResource(`Keychain/${keychainId}`);
export const useCoreKeychainUpdate = keychainId => useAction(`Keychain/${keychainId}`, 'PATCH', { snackMessageToken: 'keychain_update_success' });
export const useCoreKeychainCreate = () => {
	const [_doAction, loading] = useAction('Keychain', 'POST', { snackMessageToken: 'keychain_create_success' });

	const doAction = useCallback(label => _doAction({ Label: label }), []); //eslint-disable-line

	return [doAction, loading];
};
