import { useAction, useResource, useResourceList } from '../useBaseHooks';
import { useCallback }                             from 'react';

export const useKeychains = () => useResourceList('Keychain');
export const useKeychain = keychainId => useResource(`Keychain/${keychainId}`);
export const useKeychainUpdate = keychainId => useAction(`Keychain/${keychainId}`, 'PATCH', { snackMessageToken: 'keychain_update_success' });
export const useKeychainCreate = () => {
	const [_doAction, loading] = useAction('Keychain', 'POST', { snackMessageToken: 'keychain_create_success' });

	const doAction = useCallback(label => _doAction({ Label: label }), []); //eslint-disable-line

	return [doAction, loading];
};
