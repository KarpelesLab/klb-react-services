'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getShellOrganizationsEndpoint = exports.getShellOrganizationsEndpoint = function getShellOrganizationsEndpoint() {
  return 'Shell/Organization';
};
var getShellOrganizationCreateEndpoint = exports.getShellOrganizationCreateEndpoint = function getShellOrganizationCreateEndpoint() {
  return 'Shell/Organization:create';
};
var getShellOrganizationEndpoint = exports.getShellOrganizationEndpoint = function getShellOrganizationEndpoint(orgId) {
  return 'Shell/Organization/' + orgId;
};
var getShellOrganizationSetBillingEndpoint = exports.getShellOrganizationSetBillingEndpoint = function getShellOrganizationSetBillingEndpoint(orgId) {
  return 'Shell/Organization/' + orgId + ':setUserBilling';
};