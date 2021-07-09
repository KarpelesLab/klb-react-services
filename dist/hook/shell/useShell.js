'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useShellInvite = exports.useShellTransfer = exports.useShellRemoveTag = exports.useShellAddTag = exports.useShellCreate = exports.useShellCreateAndSetBilling = exports.useShellSetBilling = exports.useShellReboot = exports.useShellStop = exports.useShellStart = exports.useShellCancelSubscription = exports.useShellReconfigure = exports.useShellSetInitialOS = exports.useShellDeleteIp = exports.useShellUpdate = exports.useShell = exports.useShells = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _ = require('../..');

var _shellEndpoints = require('../../enpoints/shell/shellEndpoints');

var useShells = exports.useShells = function useShells() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return (0, _useBaseHooks.useResourceList)((0, _shellEndpoints.getShellsEndpoint)(), restSettings);
};
var useShell = exports.useShell = function useShell(shellId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _shellEndpoints.getShellEndpoint)(shellId), params, restSettings);
};
var useShellUpdate = exports.useShellUpdate = function useShellUpdate(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellEndpoint)(shellId), 'PATCH', { snackMessageToken: 'shell_update_success' });
};
var useShellDeleteIp = exports.useShellDeleteIp = function useShellDeleteIp(shellId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellDeleteIpAddressEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_ip_delete_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (shellIp) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ shellIp: shellIp }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellSetInitialOS = exports.useShellSetInitialOS = function useShellSetInitialOS(shellId) {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetInitialOsEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_initial_os_set_success' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (osId) {
		var keychainId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		return _doAction({
			Shell_OS__: osId,
			Keychain__: keychainId
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellReconfigure = exports.useShellReconfigure = function useShellReconfigure(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellReconfigureEndpoint)(shellId), 'POST');
};
var useShellCancelSubscription = exports.useShellCancelSubscription = function useShellCancelSubscription(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellCancelEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_subscription_cancel_success' });
};
var useShellStart = exports.useShellStart = function useShellStart(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellStartEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_action_start_success' });
};
var useShellStop = exports.useShellStop = function useShellStop(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellStopEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_action_stop_success' });
};
var useShellReboot = exports.useShellReboot = function useShellReboot(shellId) {
	return (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellRebootEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_action_reboot_success' });
};
var useShellSetBilling = exports.useShellSetBilling = function useShellSetBilling(shellId) {
	var _useAction5 = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetBillingEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_billing_set_success' }),
	    _useAction6 = _slicedToArray(_useAction5, 2),
	    _doAction = _useAction6[0],
	    loading = _useAction6[1];

	var doAction = (0, _react.useCallback)(function (billingId) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ User_Billing__: billingId }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useShellCreateAndSetBilling = exports.useShellCreateAndSetBilling = function useShellCreateAndSetBilling(shellId) {
	var _useAction7 = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellSetBillingEndpoint)(shellId), 'POST', { snackMessageToken: 'shell_billing_set_success' }),
	    _useAction8 = _slicedToArray(_useAction7, 2),
	    _setBilling = _useAction8[0],
	    settingBilling = _useAction8[1];

	var _useUserLocationCreat = (0, _.useUserLocationCreate)('@'),
	    _useUserLocationCreat2 = _slicedToArray(_useUserLocationCreat, 2),
	    _createLocation = _useUserLocationCreat2[0],
	    creatingLocation = _useUserLocationCreat2[1];

	var _useUserBillingCreate = (0, _.useUserBillingCreateWithMethod)('@'),
	    _useUserBillingCreate2 = _slicedToArray(_useUserBillingCreate, 2),
	    _createBilling = _useUserBillingCreate2[0],
	    creatingBilling = _useUserBillingCreate2[1];

	var doAction = (0, _react.useCallback)(function (locationData, _ref) {
		var billingLabel = _ref.billingLabel,
		    billingMethod = _ref.billingMethod,
		    billingMethodData = _ref.billingMethodData;
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		return _createLocation(locationData, {
			snackMessageToken: null,
			innerThen: function innerThen(location) {
				return _createBilling(billingLabel, location.User_Location__, billingMethod, billingMethodData, {
					snackMessageToken: null,
					innerThen: function innerThen(billing) {
						return _setBilling({ User_Billing__: billing.User_Billing__ }, settingsOverride);
					}
				});
			}
		});
	}, []); //eslint-disable-line

	return [doAction, settingBilling | creatingLocation | creatingBilling];
};

var useShellCreate = exports.useShellCreate = function useShellCreate() {
	var _useAction9 = (0, _useBaseHooks.useAction)((0, _shellEndpoints.getShellsEndpoint)(), 'POST', { snackMessageToken: 'shell_create_success' }),
	    _useAction10 = _slicedToArray(_useAction9, 2),
	    _doAction = _useAction10[0],
	    loading = _useAction10[1];

	var doAction = (0, _react.useCallback)(function (productId, label, userBilling) {
		var preferences = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
		var osId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
		var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
		var settingsOverride = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

		var params = {
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
var useShellAddTag = exports.useShellAddTag = function useShellAddTag(shellId) {
	var _useAction11 = (0, _useBaseHooks.useAction)((0, _.getShellAddTag)(shellId), 'POST', { snackMessageToken: 'shell_add_tag_success' }),
	    _useAction12 = _slicedToArray(_useAction11, 2),
	    _doAction = _useAction12[0],
	    loading = _useAction12[1];

	var doAction = (0, _react.useCallback)(function (tag) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ tag: tag }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellRemoveTag = exports.useShellRemoveTag = function useShellRemoveTag(shellId) {
	var _useAction13 = (0, _useBaseHooks.useAction)((0, _.getShellRemoveTag)(shellId), 'POST', { snackMessageToken: 'shell_remove_tag_success' }),
	    _useAction14 = _slicedToArray(_useAction13, 2),
	    _doAction = _useAction14[0],
	    loading = _useAction14[1];

	var doAction = (0, _react.useCallback)(function (tag) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ tag: tag }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellTransfer = exports.useShellTransfer = function useShellTransfer(shellId) {
	var _useAction15 = (0, _useBaseHooks.useAction)((0, _.getShellTransfer)(shellId), 'POST'),
	    _useAction16 = _slicedToArray(_useAction15, 2),
	    _doAction = _useAction16[0],
	    loading = _useAction16[1];

	var doAction = (0, _react.useCallback)(function (toEmail) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ toEmail: toEmail }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellInvite = exports.useShellInvite = function useShellInvite(shellId) {
	var _useAction17 = (0, _useBaseHooks.useAction)((0, _.getShellInviteEndpoint)(shellId), 'POST'),
	    _useAction18 = _slicedToArray(_useAction17, 2),
	    _doAction = _useAction18[0],
	    loading = _useAction18[1];

	var doAction = (0, _react.useCallback)(function () {
		var expires = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var emails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		return _doAction({ emails: emails, expires: expires }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};