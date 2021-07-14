import { useAction, useResource, useResourceList } from '../../useBaseHooks';
import {
	getShellOrganizationCreateEndpoint,
	getShellOrganizationEndpoint,
	getShellOrganizationsEndpoint
}                                                  from '../../../enpoints/shell/organization/shellOrganizationEndpoints';
import { useCallback }                             from 'react';

export const useShellOrganizations = (restSettings = null) => useResourceList(getShellOrganizationsEndpoint(), restSettings);
export const useShellOrganization = (organizationId, params = null, restSettings = null) => useResource(getShellOrganizationEndpoint(organizationId), params, restSettings);
export const useShellOrganizationUpdate = organizationId => useAction(getShellOrganizationEndpoint(organizationId), 'PATCH', { snackMessageToken: 'shell_organization_update_success' });
export const useShellOrganizationCreate = () => {
	const [_doAction, loading] = useAction(getShellOrganizationCreateEndpoint(), 'POST', { snackMessageToken: 'shell_organization_create_success' });
	const doAction = useCallback((name, settings, templateId, settingsOverride = {}) => {
		return _doAction({ name: name, settings: settings, template: templateId }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
