import { useAction, useResourceList } from '../../useBaseHooks';
import { useCallback }                from 'react';
import {
	getShellVolumeSnapshotRestoreEndpoint,
	getShellVolumeSnapshotsEndpoint
}                                     from '../../../enpoints/shell/volume/shellVolumeSnapshotEndpoints';

export const useShellVolumeSnapshots = (shellId, restSettings = null) => useResourceList(getShellVolumeSnapshotsEndpoint(shellId), restSettings);
export const useShellVolumeSnapshotRestore = shellId => {
	const [_doAction, loading] = useAction(getShellVolumeSnapshotRestoreEndpoint(shellId), 'POST', { snackMessageToken: 'snapshot_restore_success' });

	const doAction = useCallback((snapshotId, settingsOverride = {}) => _doAction({ Shell_Volume_Snapshot__: snapshotId }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
