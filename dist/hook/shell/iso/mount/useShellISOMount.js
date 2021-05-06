'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useShellISOMountUnmount = exports.useShellISOMount = exports.useShellISOMounts = undefined;

var _useBaseHooks = require('../../../useBaseHooks');

var _ = require('../../../..');

var useShellISOMounts = exports.useShellISOMounts = function useShellISOMounts() {
	return (0, _useBaseHooks.useResourceList)((0, _.getShellISOMountsEndpoint)());
};
var useShellISOMount = exports.useShellISOMount = function useShellISOMount(mountId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _.getShellISOMountEndpoint)(mountId), params, restSettings);
};
var useShellISOMountUnmount = exports.useShellISOMountUnmount = function useShellISOMountUnmount(mountId) {
	return (0, _useBaseHooks.useAction)((0, _.getShellISOUnmountEndpoint)(mountId), 'POST', { snackMessageToken: 'shell_iso_unmount_success' });
};