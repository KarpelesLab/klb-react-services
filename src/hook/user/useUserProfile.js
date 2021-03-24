import { useAction, useFileUploader } from '../useBaseHooks';
import { useCallback }                from 'react';

export const useUserProfileUpdate = userId => useAction(`User/${userId}/Profile`, 'PATCH', { snackMessageToken: 'success_profile_updated' });
export const useUserProfileUpdateAvatar = userId => {
	const [_doUpload, uploading, progress] = useFileUploader({ snackMessageToken: 'custom_os_image_added_success' });

	const doAction = useCallback((file, purpose, settingsOverride = {}) => {
		return _doUpload(`User/${userId}/Profile:addImage`, file, { purpose: purpose }, settingsOverride);

	}, [userId]); //eslint-disable-line

	return [doAction, uploading, progress];
};
