'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useSiteTemplate = exports.useSiteTemplates = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _siteTemplateEndpoints = require('../../../enpoints/site/template/siteTemplateEndpoints');

var useSiteTemplates = exports.useSiteTemplates = function useSiteTemplates() {
	var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResourceList)((0, _siteTemplateEndpoints.getSiteTemplatesEndpoint)(siteId), restSettings);
};
var useSiteTemplate = exports.useSiteTemplate = function useSiteTemplate(siteId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _siteTemplateEndpoints.getSiteTemplateEndpoint)(siteId), params, restSettings);
};