"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellOrganizationsEndpoint = exports.getShellOrganizationSetBillingEndpoint = exports.getShellOrganizationEndpoint = exports.getShellOrganizationCreateEndpoint = void 0;
const getShellOrganizationsEndpoint = () => 'Shell/Organization';
exports.getShellOrganizationsEndpoint = getShellOrganizationsEndpoint;
const getShellOrganizationCreateEndpoint = () => 'Shell/Organization:create';
exports.getShellOrganizationCreateEndpoint = getShellOrganizationCreateEndpoint;
const getShellOrganizationEndpoint = orgId => `Shell/Organization/${orgId}`;
exports.getShellOrganizationEndpoint = getShellOrganizationEndpoint;
const getShellOrganizationSetBillingEndpoint = orgId => `Shell/Organization/${orgId}:setUserBilling`;
exports.getShellOrganizationSetBillingEndpoint = getShellOrganizationSetBillingEndpoint;