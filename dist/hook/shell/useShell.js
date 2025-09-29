"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShells = exports.useShellUpdate = exports.useShellTransfer = exports.useShellStop = exports.useShellStart = exports.useShellSetInitialOS = exports.useShellSetBilling = exports.useShellRemoveTag = exports.useShellReconfigure = exports.useShellReboot = exports.useShellInvite = exports.useShellDeleteIp = exports.useShellCreateAndSetBilling = exports.useShellCreate = exports.useShellCancelSubscription = exports.useShellAddTag = exports.useShell = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _ = require("../..");
var _shellEndpoints = require("../../enpoints/shell/shellEndpoints");
const useShells = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _shellEndpoints.getShellsEndpoint)(), restSettings);
};
exports.useShells = useShells;
const useShell = function (shellId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _shellEndpoints.getShellEndpoint)(shellId), params, restSettings);
};
exports.useShell = useShell;
const useShellUpdate = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellEndpoint)(shellId), 'PATCH', {
  snackMessageToken: 'shell_update_success'
});
exports.useShellUpdate = useShellUpdate;
const useShellDeleteIp = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellDeleteIpAddressEndpoint)(shellId), 'POST', {
    snackMessageToken: 'shell_ip_delete_success'
  });
  const doAction = (0, _react.useCallback)(function (shellIp) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      shellIp: shellIp
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellDeleteIp = useShellDeleteIp;
const useShellSetInitialOS = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetInitialOsEndpoint)(shellId), 'POST', {
    snackMessageToken: 'shell_initial_os_set_success'
  });
  const doAction = (0, _react.useCallback)(function (osId) {
    let keychainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      Shell_OS__: osId,
      Keychain__: keychainId
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellSetInitialOS = useShellSetInitialOS;
const useShellReconfigure = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellReconfigureEndpoint)(shellId), 'POST');
exports.useShellReconfigure = useShellReconfigure;
const useShellCancelSubscription = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellCancelEndpoint)(shellId), 'POST', {
  snackMessageToken: 'shell_subscription_cancel_success'
});
exports.useShellCancelSubscription = useShellCancelSubscription;
const useShellStart = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellStartEndpoint)(shellId), 'POST', {
  snackMessageToken: 'shell_action_start_success'
});
exports.useShellStart = useShellStart;
const useShellStop = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellStopEndpoint)(shellId), 'POST', {
  snackMessageToken: 'shell_action_stop_success'
});
exports.useShellStop = useShellStop;
const useShellReboot = shellId => (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellRebootEndpoint)(shellId), 'POST', {
  snackMessageToken: 'shell_action_reboot_success'
});
exports.useShellReboot = useShellReboot;
const useShellSetBilling = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetBillingEndpoint)(shellId), 'POST', {
    snackMessageToken: 'shell_billing_set_success'
  });
  const doAction = (0, _react.useCallback)(function (billingId) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      User_Billing__: billingId
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellSetBilling = useShellSetBilling;
const useShellCreateAndSetBilling = shellId => {
  const [_setBilling, settingBilling] = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetBillingEndpoint)(shellId), 'POST', {
    snackMessageToken: 'shell_billing_set_success'
  });
  const [_createLocation, creatingLocation] = (0, _.useUserLocationCreate)('@');
  const [_createBilling, creatingBilling] = (0, _.useUserBillingCreateWithMethod)('@');
  const doAction = (0, _react.useCallback)(function (locationData, _ref) {
    let {
      billingLabel,
      billingMethod,
      billingMethodData
    } = _ref;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _createLocation(locationData, {
      snackMessageToken: null,
      innerThen: location => {
        return _createBilling(billingLabel, location.User_Location__, billingMethod, billingMethodData, {
          snackMessageToken: null,
          innerThen: billing => {
            return _setBilling({
              User_Billing__: billing.User_Billing__
            }, settingsOverride);
          }
        });
      }
    });
  }, []); //eslint-disable-line

  return [doAction, settingBilling | creatingLocation | creatingBilling];
};
exports.useShellCreateAndSetBilling = useShellCreateAndSetBilling;
const useShellCreate = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellsEndpoint)(), 'POST', {
    snackMessageToken: 'shell_create_success'
  });
  const doAction = (0, _react.useCallback)(function (productId, label, userBilling) {
    let preferences = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    let osId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    let size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    let settingsOverride = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
    const params = {
      Catalog_Product__: productId,
      Label: label
    };
    if (preferences) params['Preferences'] = preferences;
    if (osId) params['Shell_OS__'] = osId;
    if (size) params['Size'] = size;
    if (typeof userBilling === 'string' || userBilling instanceof String) params['User_Billing__'] = userBilling;else params['User_Billing'] = userBilling;
    return _doAction(params, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellCreate = useShellCreate;
const useShellAddTag = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getShellAddTag)(shellId), 'POST', {
    snackMessageToken: 'shell_add_tag_success'
  });
  const doAction = (0, _react.useCallback)(function (tag) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      tag: tag
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellAddTag = useShellAddTag;
const useShellRemoveTag = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getShellRemoveTag)(shellId), 'POST', {
    snackMessageToken: 'shell_remove_tag_success'
  });
  const doAction = (0, _react.useCallback)(function (tag) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      tag: tag
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellRemoveTag = useShellRemoveTag;
const useShellTransfer = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getShellTransfer)(shellId), 'POST');
  const doAction = (0, _react.useCallback)(function (toEmail) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      toEmail: toEmail
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellTransfer = useShellTransfer;
const useShellInvite = shellId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _.getShellInviteEndpoint)(shellId), 'POST');
  const doAction = (0, _react.useCallback)(function () {
    let expires = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let emails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      emails: emails,
      expires: expires
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useShellInvite = useShellInvite;