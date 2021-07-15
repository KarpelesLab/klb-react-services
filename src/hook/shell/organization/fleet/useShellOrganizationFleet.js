import { useResource }                       from '../../../useBaseHooks';
import { getShellOrganizationFleetEndpoint } from '../../../..';

export const useShellOrganizationFleet = (fleetId, params = null, restSettings = null) => useResource(getShellOrganizationFleetEndpoint(fleetId), params, restSettings);
