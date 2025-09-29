"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellOrganizations = exports.useShellOrganizationUpdate = exports.useShellOrganizationSetBilling = exports.useShellOrganizationCreate = exports.useShellOrganization = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _shellOrganizationEndpoints = require("../../../enpoints/shell/organization/shellOrganizationEndpoints");
var _react = require("react");
var _ = require("../../..");
const useShellOrganizations = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _shellOrganizationEndpoints.getShellOrganizationsEndpoint)(), restSettings);
};
exports.useShellOrganizations = useShellOrganizations;
const useShellOrganization = function (organizationId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _shellOrganizationEndpoints.getShellOrganizationEndpoint)(organizationId), params, restSettings);
};
exports.useShellOrganization = useShellOrganization;
const useShellOrganizationUpdate = organizationId => (0, _useBaseHooks.useAction)((0, _shellOrganizationEndpoints.getShellOrganizationEndpoint)(organizationId), 'PATCH', {
  snackMessageToken: 'shell_organization_update_success'
});
exports.useShellOrganizationUpdate = useShellOrganizationUpdate;
const useShellOrganizationCreate = () => {
  const [_doCreate, creating] = (0, _useBaseHooks.useAction)((0, _shellOrganizationEndpoints.getShellOrganizationCreateEndpoint)(), 'POST', {
    snackMessageToken: 'shell_organization_create_success'
  });
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)();
  const doAction = (0, _react.useCallback)(function (name, settings, templateId, files) {
    let settingsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const params = {
      name: name,
      settings: settings,
      template: templateId
    };
    const buildUpload = (key, file, innerThen) => {
      return org => _doUpload((0, _.getSettingUploadEndpoint)(org.Setting__), file, {
        key: key
      }, {
        innerThen: innerThen ? innerThen : undefined
      }).then(() => org);
    };
    let setOv = {};
    if (files) {
      let last = null;
      for (const [settingKey, file] of Object.entries(files)) {
        last = buildUpload(settingKey, file, last);
      }
      setOv = {
        innerThen: last
      };
    }
    return _doCreate(params, setOv);
  }, []); //eslint-disable-line

  return [doAction, creating || uploading, progress];
};
exports.useShellOrganizationCreate = useShellOrganizationCreate;
const useShellOrganizationSetBilling = orgId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellOrganizationEndpoints.getShellOrganizationSetBillingEndpoint)(orgId), 'POST', {
    snackMessageToken: 'shell_organization_billing_set_success'
  });
  const doAction = (0, _react.useCallback)(function (userBillingId) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      User_Billing__: userBillingId
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellOrganizationSetBilling = useShellOrganizationSetBilling;