import { useFileUploader, useResource }                 from '../useBaseHooks';
import { getSettingEndpoint, getSettingUploadEndpoint } from '../../enpoints/setting/getSettingEndpoints';
import { useCallback }                                  from 'react';

export const useSetting = (settingId, params = null, restSettings = null) => useResource(getSettingEndpoint(settingId), params, restSettings);
export const useSettingUpload = settingId => {
	const [_doUpload, uploading, progress] = useFileUploader();

	const doAction = useCallback((file, key, settingsOverride = {}) => {
		return _doUpload(getSettingUploadEndpoint(settingId), file, { key: key }, settingsOverride);

	}, [settingId]); //eslint-disable-line

	return [doAction, uploading, progress];
};
