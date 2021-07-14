export const getSiteTemplatesEndpoint = (siteId = null) => `Site/${siteId ? `${siteId}/` : ''}Template`;
export const getSiteTemplateEndpoint = (templateId) => `Site/Template/${templateId}`;
