import { useAction, useResourceList } from '../useBaseHooks';
import { useCallback }                from 'react';
import { useUserLocationUpdate }      from './useUserLocation';

export const useUserBillings = userId => useResourceList(`User/${userId}/Billing`);
export const useUserBillingUpdate = billingId => useAction(`User/Billing/${billingId}`, 'PATCH');
export const useUserBillingUpdateLocation = (billingId, locationId) => {
	const [_updateBilling, updatingBilling] = useAction(`User/Billing/${billingId}`, 'PATCH');
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
	const [_doAction, loading] = useAction('User/Billing:create', 'POST', { snackMessageToken: 'user_billing_created' });

	const doAction = useCallback((label, userLocationId, method, methodData = {}, settingsOverride = {}) => _doAction({
		Label: label,
		User_Location__: userLocationId,
		method: method,
		...methodData
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
