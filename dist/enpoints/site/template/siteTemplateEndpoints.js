'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSiteTemplatesEndpoint = exports.getSiteTemplatesEndpoint = function getSiteTemplatesEndpoint() {
  var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return 'Site/' + (siteId ? siteId + '/' : '') + 'Template';
};
var getSiteTemplateEndpoint = exports.getSiteTemplateEndpoint = function getSiteTemplateEndpoint(templateId) {
  return 'Site/Template/' + templateId;
};