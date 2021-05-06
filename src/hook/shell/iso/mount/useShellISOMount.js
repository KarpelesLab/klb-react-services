import { useAction, useResource, useResourceList }                                  from '../../../useBaseHooks';
import {
	getShellISOEndpoint,
	getShellISOMountEndpoint,
	getShellISOMountsEndpoint,
	getShellISOUnmountEndpoint
} from '../../../..';

export const useShellISOMounts = () => useResourceList(getShellISOMountsEndpoint());
export const useShellISOMount = (mountId, params = null, restSettings = null) => useResource(getShellISOMountEndpoint(mountId), params, restSettings);
export const useShellISOMountUnmount = mountId => useAction(getShellISOUnmountEndpoint(mountId), 'POST', { snackMessageToken: 'shell_iso_unmount_success' });
