import { useAction, useFileUploader }                             from '../useBaseHooks';
import { useCallback }                                            from 'react';
import { getUserProfileAddImageEndpoint, getUserProfileEndpoint } from '../../enpoints/user/userProfileEndpoints';

export const useUserProfileUpdate = userId => useAction(getUserProfileEndpoint(userId), 'PATCH', { snackMessageToken: 'success_profile_updated' });
export const useUserProfileUpdateAvatar = userId => {
	const [_doUpload, uploading, progress] = useFileUploader({ snackMessageToken: 'custom_os_image_added_success' });

	const doAction = useCallback((file, purpose, settingsOverride = {}) => {
		return _doUpload(getUserProfileAddImageEndpoint(userId), file, { purpose: purpose }, settingsOverride);

	}, [userId]); //eslint-disable-line

	return [doAction, uploading, progress];
};
