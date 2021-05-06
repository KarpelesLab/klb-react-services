import { useAction, useResource, useResourceList } from '../useBaseHooks';
import {
	getAffiliateEndpoint,
	getAffiliateExportOrdersEndpoint,
	getUserWalletsEndpoint
}                                                  from '../../enpoints/affiliate/affiliateEndpoints';
import { useCallback }                             from 'react';

export const useAffiliate = (id, params = null) => useResource(getAffiliateEndpoint(id), params);
export const useUserWallets = userId => useResourceList(getUserWalletsEndpoint(userId));
export const useAffiliateExportOrder = affiliateId => {
	const [_doAction, loading] = useAction(getAffiliateExportOrdersEndpoint(affiliateId), 'POST');

	const doAction = useCallback((year = null, settingsOverride = {}) => _doAction({
		year: year,
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
