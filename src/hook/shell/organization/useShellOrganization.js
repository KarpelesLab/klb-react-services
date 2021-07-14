import { useAction, useFileUploader, useResource, useResourceList } from '../../useBaseHooks';
import {
	getShellOrganizationCreateEndpoint,
	getShellOrganizationEndpoint,
	getShellOrganizationsEndpoint
}                                                                   from '../../../enpoints/shell/organization/shellOrganizationEndpoints';
import { useCallback }                                              from 'react';
import { getSettingUploadEndpoint }                                 from '../../..';

export const useShellOrganizations = (restSettings = null) => useResourceList(getShellOrganizationsEndpoint(), restSettings);
export const useShellOrganization = (organizationId, params = null, restSettings = null) => useResource(getShellOrganizationEndpoint(organizationId), params, restSettings);
export const useShellOrganizationUpdate = organizationId => useAction(getShellOrganizationEndpoint(organizationId), 'PATCH', { snackMessageToken: 'shell_organization_update_success' });
export const useShellOrganizationCreate = () => {
	const [_doCreate, creating] = useAction(getShellOrganizationCreateEndpoint(), 'POST', { snackMessageToken: 'shell_organization_create_success' });
	const [_doUpload, uploading, progress] = useFileUploader();

	const doAction = useCallback((name, settings, templateId, files, settingsOverride = {}) => {
		const params = { name: name, settings: settings, template: templateId };

		const buildUpload = (key, file, innerThen) => {
			return org => _doUpload(getSettingUploadEndpoint(org.Setting__), file, { key: key }, { innerThen: innerThen ? innerThen : undefined }).then(() => org);
		};

		let setOv = {};
		if (files) {
			let last = null;
			for (const [settingKey, file] of Object.entries(files)) {
				last = buildUpload(settingKey, file, last);
			}
			setOv = { innerThen: last };
		}

		return _doCreate(params, setOv);

	}, []); //eslint-disable-line

	return [doAction, creating || uploading, progress];
};
