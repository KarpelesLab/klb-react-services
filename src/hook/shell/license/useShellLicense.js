import { useResource, useResourceList }                      from '../../useBaseHooks';
import { getShellLicenseEndpoint, getShellLicensesEndpoint } from '../../..';

export const useShellLicenses = (shellId, restSettings = null) => useResourceList(getShellLicensesEndpoint(shellId), restSettings);
export const useShellLicense = (licenseId, shellId = undefined, params = null, restSettings = null) => useResource(getShellLicenseEndpoint(licenseId, shellId), params, restSettings);
