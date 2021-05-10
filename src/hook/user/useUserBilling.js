import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';
import { useUserLocationUpdate }      from './useUserLocation';
import {
	getUserBillingCreateEndpoint,
	getUserBillingEndpoint,
	getUserBillingsEndpoint
}                                     from '../../enpoints/user/userBillingEndpoints';

export const useUserBillings = (userId, restSettings = null) => useResourceList(getUserBillingsEndpoint(userId),restSettings);
export const useUserBillingUpdate = billingId => useAction(getUserBillingEndpoint(billingId), 'PATCH');
export const useUserBillingUpdateLocation = (billingId, locationId) => {
	const [_updateBilling, updatingBilling] = useAction(getUserBillingEndpoint(billingId), 'PATCH');
	const [_updateLocation, updatingLocation] = useUserLocationUpdate(locationId);

	const doAction = useCallback((data, settingsOverride = {}) => {
		return _updateLocation(data, {
			snackMessageToken: null,
			innerThen: location => {
				return _updateBilling({ User_Location__: location.User_Location__ }, {
					snackMessageToken: 'user_location_update_success',
					...settingsOverride,
				});
			}
		});
	}, []); //eslint-disable-line

	return [doAction, updatingBilling || updatingLocation];
};

export const useUserBillingCreateWithMethod = () => {
	const [_doAction, loading] = useAction(getUserBillingCreateEndpoint(), 'POST', { snackMessageToken: 'user_billing_created' });

	const doAction = useCallback((label, userLocationId, method, methodData = {}, settingsOverride = {}) => _doAction({
		Label: label,
		User_Location__: userLocationId,
		method: method,
		...methodData
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
