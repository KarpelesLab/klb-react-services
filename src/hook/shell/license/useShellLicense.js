import { useResource, useResourceList }                      from '../../useBaseHooks';
import { getShellLicenseEndpoint, getShellLicensesEndpoint } from '../../..';

export const useShellLicenses = shellId => useResourceList(getShellLicensesEndpoint(shellId));
export const useShellLicense = (licenseId, shellId = undefined, params = null) => useResource(getShellLicenseEndpoint(licenseId, shellId), params);
