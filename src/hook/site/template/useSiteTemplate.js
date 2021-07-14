import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getSiteTemplateEndpoint,
	getSiteTemplatesEndpoint
}                                       from '../../../enpoints/site/template/siteTemplateEndpoints';

export const useSiteTemplates = (siteId = null, restSettings = null) => useResourceList(getSiteTemplatesEndpoint(siteId), restSettings);
export const useSiteTemplate = (siteId, params = null, restSettings = null) => useResource(getSiteTemplateEndpoint(siteId), params, restSettings);
