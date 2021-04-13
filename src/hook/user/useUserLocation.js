import { useAction, useResource }                            from '../useBaseHooks';
import { getUserLocationEndpoint, getUserLocationsEndpoint } from '../../enpoints/user/userLocationEndpoints';

export const useUserLocation = (locationId, params = null) => useResource(getUserLocationEndpoint(locationId), params);
export const useUserLocationUpdate = locationId => useAction(getUserLocationEndpoint(locationId), 'PATCH', { snackMessageToken: 'user_location_update_success' });
export const useUserLocationCreate = userId => useAction(getUserLocationsEndpoint(userId), 'POST', { snackMessageToken: 'user_location_create_success' });
