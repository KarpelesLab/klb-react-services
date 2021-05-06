export const getShellLicensesEndpoint = shellId => `Shell/${shellId}/License`;
export const getShellLicenseEndpoint = (licenseId, shellId = undefined) => shellId ? `Shell/${shellId}/License/${licenseId}` : `Shell/License/${licenseId}`;
