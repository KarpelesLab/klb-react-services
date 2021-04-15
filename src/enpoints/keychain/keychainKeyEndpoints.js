export const getKeychainKeysEndpoint = keychainId => `Keychain/${keychainId}/Key`;
export const getKeychainKeyEndpoint = keychainKeyId => `Keychain/Key/${keychainKeyId}`;
export const getKeychainKeyCreateEndpoint = keychainId => `Keychain/${keychainId}/Key:create`;
export const getKeychainKeyCheckEndpoint = () => 'Keychain/Key:check';
