export const getUserWalletAutosEndpoint = (walletId = null) => walletId ? `User/Wallet/${walletId}/Auto` : `User/Wallet/Auto`;
