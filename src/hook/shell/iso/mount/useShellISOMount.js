import { useAction, useResource, useResourceList }                                         from '../../../useBaseHooks';
import { getShellISOMountEndpoint, getShellISOMountsEndpoint, getShellISOUnmountEndpoint } from '../../../..';

export const useShellISOMounts = (restSettings = null) => useResourceList(getShellISOMountsEndpoint(), restSettings);
export const useShellISOMount = (mountId, params = null, restSettings = null) => useResource(getShellISOMountEndpoint(mountId), params, restSettings);
export const useShellISOMountUnmount = mountId => useAction(getShellISOUnmountEndpoint(mountId), 'POST', { snackMessageToken: 'shell_iso_unmount_success' });
