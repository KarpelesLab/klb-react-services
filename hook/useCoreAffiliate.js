import { useResource, useResourceList } from './useBaseHooks';


export const useCoreAffiliate = id => useResource(`Affiliate/${id}`);
export const useCoreUserWallets = userId => useResourceList(`User/${userId}/Wallet`);

