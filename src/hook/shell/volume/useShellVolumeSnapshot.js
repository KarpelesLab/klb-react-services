import { useAction, useResourceList } from '../../useBaseHooks';
import { useCallback }                from 'react';

export const useShellVolumeSnapshots = shellId => useResourceList(`Shell/${shellId}/Volume/Snapshot`);
export const useShellVolumeSnapshotRestore = shellId => {
	const [_doAction, loading] = useAction(`Shell/${shellId}:restoreSnapshot`, 'POST', { snackMessageToken: 'snapshot_restore_success' });

	const doAction = useCallback(snapshotId => _doAction({ Shell_Volume_Snapshot__: snapshotId }), []); //eslint-disable-line

	return [doAction, loading];
};
