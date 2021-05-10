import { useAction, useFileUploader, useResource, useResourceList } from '../../useBaseHooks';
import { useCallback }                                              from 'react';
import {
	getOsImageUploadEndpoint,
	getShellOsCreateEmptyEndpoint,
	getShellOsEndpoint,
	getShellOsesEndpoint,
	getShellOsImageImportEndpoint,
	getShellOsImagesEndpoint,
	getShellOsImportEndpoint,
	getShellOsUploadEndpoint,
	getShellOsUploadImageEndpoint
}                                                                   from '../../../enpoints/shell/os/shellOsEndpoints';

export const useOperatingSystems = (restSettings = null) => useResourceList(getShellOsesEndpoint(),restSettings);
export const useOperatingSystem = (osId, params = null, restSettings = null) => useResource(getShellOsEndpoint(osId), params,restSettings);
export const useOperatingSystemImages = (osId, restSettings = null) => useResourceList(getShellOsImagesEndpoint(osId),restSettings);
export const useOperatingSystemCreateEmpty = () => {

	const [_doCreate, loading] = useAction(getShellOsCreateEmptyEndpoint(), 'POST', { snackMessageToken: 'custom_os_create_success' });
	const [_doUpload, uploading, progress] = useFileUploader();
	const doAction = useCallback((names, family, boot, cpu, isPublic, descriptions = [], shortDescriptions = [], purpose = 'unknown', icon = null, settingsOverride = {}) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
		};

		let settings = settingsOverride;
		if (icon)
			settings = { innerThen: os => icon ? _doUpload(getShellOsUploadImageEndpoint(os.Shell_OS__), icon, {}, settingsOverride) : os };

		return _doCreate(params, settings);

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

export const useOperatingSystemCreateFromShell = () => {
	const [_doCreate, loading] = useAction(getShellOsImportEndpoint(), 'POST', { snackMessageToken: 'custom_os_create_success' });
	const [_doUpload, uploading, progress] = useFileUploader();
	const doAction = useCallback((shellVolumeId, names, family, boot, cpu, isPublic, descriptions = [], shortDescriptions = [], purpose = 'unknown', icon = null, settingsOverride = {}) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			Shell_Volume__: shellVolumeId,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
		};

		let settings = settingsOverride;
		if (icon)
			settings = { innerThen: os => icon ? _doUpload(getShellOsUploadImageEndpoint(os.Shell_OS__), icon, {}, settingsOverride) : os };

		return _doCreate(params, settings);

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

export const useOperatingSystemCreateFromFile = () => {
	const [_doUploadMain, loadingMain, progress] = useFileUploader({ snackMessageToken: 'custom_os_create_success' });
	const [_doImageUpload, loadingImage, progressImage] = useFileUploader();

	const doAction = useCallback((file, names, family, boot, cpu, isPublic, descriptions = [], shortDescriptions = [], purpose = 'unknown', icon = null, settingsOverride = {}) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu,
			isPublic: isPublic,
			purpose: purpose,
		};

		let settings = settingsOverride;

		if (icon)
			settings = { innerThen: os => icon ? _doImageUpload(getShellOsUploadImageEndpoint(os.Shell_OS__), icon, {}, settingsOverride) : os };

		return _doUploadMain(getShellOsUploadEndpoint(), file, params, settings);

	}, []);  //eslint-disable-line

	return [doAction, loadingMain || loadingImage, progress ? progress : progressImage];
};


export const useUpdateOperatingSystem = osId => {
	const [_doUpdate, loading] = useAction(getShellOsEndpoint(osId), 'PATCH', { snackMessageToken: 'custom_os_update_success' });
	const [_doUpload, uploading, progress] = useFileUploader();
	const doAction = useCallback((data, icon = null, settingsOverride = {}) => {
		let settings = settingsOverride;

		if (icon)
			settings = { innerThen: os => icon ? _doUpload(getShellOsUploadImageEndpoint(os.Shell_OS__), icon, {}, settingsOverride) : os };

		return _doUpdate(data, settings);

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
};

export const useOperatingSystemAddImageFromShell = osId => {
	const [_doAction, loading] = useAction(getShellOsImageImportEndpoint(osId), 'POST', { snackMessageToken: 'custom_os_image_added_success' });

	const doAction = useCallback((shellVolumeId, settingsOverride = {}) => _doAction({ Shell_Volume__: shellVolumeId }, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};


export const useOperatingSystemAddImageFromFile = osId => {
	const [_doUpload, uploading, progress] = useFileUploader({ snackMessageToken: 'custom_os_image_added_success' });
	const doAction = useCallback((file, settingsOverride = {}) => {
		return _doUpload(getOsImageUploadEndpoint(osId), file, {}, settingsOverride);

	}, [osId]); //eslint-disable-line

	return [doAction, uploading, progress];
};
export const useOperatingSystemDelete = osId => useAction(getShellOsEndpoint(osId), 'DELETE', { snackMessageToken: 'custom_os_delete_success' });
