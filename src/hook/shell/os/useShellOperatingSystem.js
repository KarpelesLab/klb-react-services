import { useAction, useFileUploader, useResource, useResourceList } from '../../useBaseHooks';
import { useCallback }                                              from 'react';

export const useOperatingSystems = () => useResourceList('Shell/OS');
export const useOperatingSystem = osId => useResource(`Shell/OS/${osId}`);
export const useOperatingSystemImages = osId => useResourceList(`Shell/OS/${osId}/Image`);
export const useOperatingSystemCreateEmpty = () => {

	const [_doCreate, loading] = useAction('Shell/OS:createEmpty', 'POST', { snackMessageToken: 'custom_os_create_success' });
	const [_doUpload, uploading, progress] = useFileUploader()
	const doAction = useCallback((names, family, boot, cpu, descriptions = [], shortDescriptions = [], icon = null) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu,
		};

		return _doCreate(params, {
			innerThen: os => icon ? _doUpload(`Shell/OS/${os.Shell_OS__}:uploadImage`, icon) : os
		})

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
}

export const useOperatingSystemCreateFromShell = () => {
	const [_doCreate, loading] = useAction('Shell/OS:import', 'POST', { snackMessageToken: 'custom_os_create_success' });
	const [_doUpload, uploading, progress] = useFileUploader()
	const doAction = useCallback((shellVolumeId, names, family, boot, cpu, descriptions = [], shortDescriptions = [], icon = null) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			Shell_Volume__: shellVolumeId,
			cpu: cpu
		};

		return _doCreate(params, {
			innerThen: os => icon ? _doUpload(`Shell/OS/${os.Shell_OS__}:uploadImage`, icon) : os
		})

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
}

export const useOperatingSystemCreateFromFile = () => {
	const [_doUploadMain, loadingMain, progress] = useFileUploader({ snackMessageToken: 'custom_os_create_success' })
	const [_doImageUpload, loadingImage, progressImage] = useFileUploader()

	const doAction = useCallback((file, names, family, boot, cpu, descriptions = [], shortDescriptions = [], icon = null) => {
		const params = {
			names: names,
			descriptions: descriptions,
			shortDescriptions: shortDescriptions,
			family: family,
			boot: boot,
			cpu: cpu
		};

		return _doUploadMain('Shell/OS:upload', file, params, {
			innerThen: os => icon ? _doImageUpload(`Shell/OS/${os.Shell_OS__}:uploadImage`, icon) : os
		})

	},[]);  //eslint-disable-line

	return [doAction, loadingMain || loadingImage, progress ? progress : progressImage ];
}


export const useUpdateOperatingSystem = osId => {
	const [_doUpdate, loading] = useAction(`Shell/OS/${osId}`, 'PATCH', { snackMessageToken: 'custom_os_update_success' })
	const [_doUpload, uploading, progress] = useFileUploader()
	const doAction = useCallback((data, icon = null) => {
		return _doUpdate(data, {
			innerThen: os => icon ? _doUpload(`Shell/OS/${os.Shell_OS__}:uploadImage`, icon) : os
		})

	}, []); //eslint-disable-line

	return [doAction, loading || uploading, progress];
}

export const useOperatingSystemAddImageFromShell = osId => {
	const [_doAction, loading] = useAction(`Shell/OS/${osId}/Image:import`, 'POST', { snackMessageToken: 'custom_os_image_added_success' });

	const doAction = useCallback(shellVolumeId => _doAction({ Shell_Volume__: shellVolumeId }), []); //eslint-disable-line

	return [doAction, loading];
};


export const useOperatingSystemAddImageFromFile = osId => {
	const [_doUpload, uploading, progress] = useFileUploader({ snackMessageToken: 'custom_os_image_added_success' })
	const doAction = useCallback(file => {
		return _doUpload(`Shell/OS/${osId}/Image:upload`, file)

	}, [osId]); //eslint-disable-line

	return [doAction, uploading, progress];
}
