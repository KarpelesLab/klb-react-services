import { useAction, useResource } from '../useBaseHooks';

export const useUserLocation = locationId => useResource(`User/Location/${locationId}`);
export const useUserLocationUpdate = locationId => useAction(`User/Location/${locationId}`, 'PATCH', { snackMessageToken: 'user_location_update_success' });
export const useUserLocationCreate = userId => useAction(`User/${userId}Location`, 'POST', { snackMessageToken: 'user_location_create_success' });
