"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSiteTemplates = exports.useSiteTemplate = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _siteTemplateEndpoints = require("../../../enpoints/site/template/siteTemplateEndpoints");
const useSiteTemplates = function () {
  let siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _siteTemplateEndpoints.getSiteTemplatesEndpoint)(siteId), restSettings);
};
exports.useSiteTemplates = useSiteTemplates;
const useSiteTemplate = function (siteId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _siteTemplateEndpoints.getSiteTemplateEndpoint)(siteId), params, restSettings);
};
exports.useSiteTemplate = useSiteTemplate;