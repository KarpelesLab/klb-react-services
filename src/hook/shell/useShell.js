import { useAction, useResourceList } from '../useBaseHooks';
import { useResource }                from '../../../dist/hook/useBaseHooks';
import { useCallback }                from 'react';

export const useShells = () => useResourceList('Shell');
export const useShell = shellId => useResource(`Shell/${shellId}`);
export const useShellUpdate = shellId => useAction(`Shell/${shellId}`, 'PATCH', { snackMessageToken: 'shell_update_success' });
export const useShellDeleteIp = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:deleteIpAddress`, 'POST', { snackMessageToken: 'shell_ip_delete_success' });

	const doAction = useCallback(shellIp => _doAction({ shellIp: shellIp }), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellSetInitialOS = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:setInitialOs`, 'POST', { snackMessageToken: 'shell_initial_os_set_success' });

	const doAction = useCallback(osId => _doAction({ Shell_OS__: osId }), []); //eslint-disable-line

	return [doAction, loading];
};
export const useShellReconfigure = shellId => useAction(`Shell/${shellId}:reconfigure`, 'POST');
export const useShellCancelSubscription = shellId => useAction(`Shell/${shellId}:cancel`, 'POST', { snackMessageToken: 'shell_subscription_cancel_success' });
export const useShellStart = shellId => useAction(`Shell/${shellId}:start`, 'POST', { snackMessageToken: 'shell_action_start_success' });
export const useShellStop = shellId => useAction(`Shell/${shellId}:stop`, 'POST', { snackMessageToken: 'shell_action_stop_success' });
export const useShellReboot = shellId => useAction(`Shell/${shellId}:reboot`, 'POST', { snackMessageToken: 'shell_action_reboot_success' });
