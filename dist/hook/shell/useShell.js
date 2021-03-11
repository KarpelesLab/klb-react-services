'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useShellReboot = exports.useShellStop = exports.useShellStart = exports.useShellCancelSubscription = exports.useShellReconfigure = exports.useShellSetInitialOS = exports.useShellDeleteIp = exports.useShellUpdate = exports.useShell = exports.useShells = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _useBaseHooks2 = require('../../../dist/hook/useBaseHooks');

var _react = require('react');

var useShells = exports.useShells = function useShells() {
	return (0, _useBaseHooks.useResourceList)('Shell');
};
var useShell = exports.useShell = function useShell(shellId) {
	return (0, _useBaseHooks2.useResource)('Shell/' + shellId);
};
var useShellUpdate = exports.useShellUpdate = function useShellUpdate(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId, 'PATCH', { snackMessageToken: 'shell_update_success' });
};
var useShellDeleteIp = exports.useShellDeleteIp = function useShellDeleteIp(shellId) {
	var _useAction = (0, _useBaseHooks.useAction)('Shell/' + shellId + ':deleteIpAddress', 'POST', { snackMessageToken: 'shell_ip_delete_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (shellIp) {
		return _doAction({ shellIp: shellIp });
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellSetInitialOS = exports.useShellSetInitialOS = function useShellSetInitialOS(shellId) {
	var _useAction3 = (0, _useBaseHooks.useAction)('Shell/' + shellId + ':setInitialOs', 'POST', { snackMessageToken: 'shell_initial_os_set_success' }),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (osId) {
		return _doAction({ Shell_OS__: osId });
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useShellReconfigure = exports.useShellReconfigure = function useShellReconfigure(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId + ':reconfigure', 'POST');
};
var useShellCancelSubscription = exports.useShellCancelSubscription = function useShellCancelSubscription(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId + ':cancel', 'POST', { snackMessageToken: 'shell_subscription_cancel_success' });
};
var useShellStart = exports.useShellStart = function useShellStart(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId + ':start', 'POST', { snackMessageToken: 'shell_action_start_success' });
};
var useShellStop = exports.useShellStop = function useShellStop(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId + ':stop', 'POST', { snackMessageToken: 'shell_action_stop_success' });
};
var useShellReboot = exports.useShellReboot = function useShellReboot(shellId) {
	return (0, _useBaseHooks.useAction)('Shell/' + shellId + ':reboot', 'POST', { snackMessageToken: 'shell_action_reboot_success' });
};