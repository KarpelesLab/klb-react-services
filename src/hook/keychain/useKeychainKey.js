import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';
import {
	getKeychainKeyCheckEndpoint,
	getKeychainKeyCreateEndpoint,
	getKeychainKeyEndpoint,
	getKeychainKeysEndpoint
} from '../../enpoints/keychain/keychainKeyEndpoints';

export const useKeychainKeys = keychainId => useResourceList(getKeychainKeysEndpoint(keychainId));
export const useKeychainKeyDelete = keychainKeyId => useAction(getKeychainKeyEndpoint(keychainKeyId), 'DELETE', { snackMessageToken: 'key_delete_success' });
export const useKeychainKeyCreate = keychainId => {
	const [_doAction, loading] = useAction(getKeychainKeyCreateEndpoint(keychainId), 'POST', { snackMessageToken: 'key_create_success' });

	const doAction = useCallback((label, publicKey, expires, settingsOverride = {}) => _doAction({
		label: label,
		publicKey: publicKey,
		expires: expires
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useKeychainKeyCheck = () => {
	const [_doAction, loading] = useAction(getKeychainKeyCheckEndpoint(), 'POST');

	const doAction = useCallback((publicKey, settingsOverride = {}) => _doAction({
		publicKey: publicKey,
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
