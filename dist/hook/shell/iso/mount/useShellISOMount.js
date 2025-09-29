"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellISOMounts = exports.useShellISOMountUnmount = exports.useShellISOMount = void 0;
var _useBaseHooks = require("../../../useBaseHooks");
var _ = require("../../../..");
const useShellISOMounts = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _.getShellISOMountsEndpoint)(), restSettings);
};
exports.useShellISOMounts = useShellISOMounts;
const useShellISOMount = function (mountId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _.getShellISOMountEndpoint)(mountId), params, restSettings);
};
exports.useShellISOMount = useShellISOMount;
const useShellISOMountUnmount = mountId => (0, _useBaseHooks.useAction)((0, _.getShellISOUnmountEndpoint)(mountId), 'POST', {
  snackMessageToken: 'shell_iso_unmount_success'
});
exports.useShellISOMountUnmount = useShellISOMountUnmount;