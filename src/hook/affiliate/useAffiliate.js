import { useResource, useResourceList } from '../useBaseHooks';

export const useAffiliate = id => useResource(`Affiliate/${id}`);
export const useUserWallets = userId => useResourceList(`User/${userId}/Wallet`);
