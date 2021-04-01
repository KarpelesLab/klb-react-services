import { useAction, useFileUploader, useResource, useResourceList } from '../../useBaseHooks';
import {
	getShellISOEndpoint,
	getShellISOsEndpoint,
	getShellISOUploadEndpoint,
	getShellMountISOEndpoint
}                                                                   from '../../..';
import { useCallback }                                              from 'react';

export const useShellISOs = () => useResourceList(getShellISOsEndpoint());
export const useShellISO = isoId => useResource(getShellISOEndpoint(isoId));
export const useShellISOUpload = () => {
	const [_doUploadMain, loadingMain, progress] = useFileUploader({ snackMessageToken: 'shell_iso_create_success' });

	const doAction = useCallback((file, settingsOverride = {}) => {
		return _doUploadMain(getShellISOUploadEndpoint(), file, {}, settingsOverride);

	}, []);  //eslint-disable-line

	return [doAction, loadingMain, progress];
};
export const useShellISODelete = isoId => useAction(getShellISOEndpoint(isoId), 'DELETE', { snackMessageToken: 'shell_iso_delete_success' });
export const useShellMountISO = isoId => {
	const [_doAction, loading] = useAction(getShellMountISOEndpoint(isoId), 'POST', { snackMessageToken: 'shell_iso_mount_success' });

	const doAction = useCallback((shellId, settingsOverride = {}) => _doAction({ Shell__: shellId }, settingsOverride), [_doAction]); //eslint-disable-line

	return [doAction, loading];
};
