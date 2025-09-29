"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSiteTemplatesEndpoint = exports.getSiteTemplateEndpoint = void 0;
const getSiteTemplatesEndpoint = function () {
  let siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return `Site/${siteId ? `${siteId}/` : ''}Template`;
};
exports.getSiteTemplatesEndpoint = getSiteTemplatesEndpoint;
const getSiteTemplateEndpoint = templateId => `Site/Template/${templateId}`;
exports.getSiteTemplateEndpoint = getSiteTemplateEndpoint;