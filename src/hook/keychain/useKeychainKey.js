import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';

export const useKeychainKeys = keychainId => useResourceList(`Keychain/${keychainId}/Key`);
export const useKeychainKeyDelete = keychainKeyId => useAction(`Keychain/Key/${keychainKeyId}`, 'DELETE', { snackMessageToken: 'key_delete_success' });
export const useKeychainKeyCreate = keychainId => {
	const [_doAction, loading] = useAction(`Keychain/${keychainId}/Key:create`, 'POST', { snackMessageToken: 'key_create_success' });

	const doAction = useCallback((label, publicKey, expires) => _doAction({
		label: label,
		publicKey: publicKey,
		expires: expires
	}), []); //eslint-disable-line

	return [doAction, loading];
};
