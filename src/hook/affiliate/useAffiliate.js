import { useResource, useResourceList }                 from '../useBaseHooks';
import { getAffiliateEndpoint, getUserWalletsEndpoint } from '../../enpoints/affiliate/affiliateEndpoints';

export const useAffiliate = (id, params = null) => useResource(getAffiliateEndpoint(id), params);
export const useUserWallets = userId => useResourceList(getUserWalletsEndpoint(userId));
