import { useResourceList }            from '../../../useBaseHooks';
import { getUserWalletAutosEndpoint } from '../../../../enpoints/user/wallet/auto/userWalletAutoEndpoints';

export const useUserWalletAutos = (walletId = null, restSettings = null) => useResourceList(getUserWalletAutosEndpoint(walletId), restSettings);
