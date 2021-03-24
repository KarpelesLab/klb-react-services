import { useResource, useResourceList }                 from '../useBaseHooks';
import { getAffiliateEndpoint, getUserWalletsEndpoint } from '../../enpoints/affiliate/affiliateEndpoints';

export const useAffiliate = id => useResource(getAffiliateEndpoint(id));
export const useUserWallets = userId => useResourceList(getUserWalletsEndpoint(userId));
