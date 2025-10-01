"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellProductChangeWarning = exports.useShellAccountWarnings = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _ = require("../../..");
const useShellAccountWarnings = () => (0, _useBaseHooks.useAction)((0, _.getShellAccountWarningsEndpoint)());
exports.useShellAccountWarnings = useShellAccountWarnings;
const useShellProductChangeWarning = () => (0, _useBaseHooks.useAction)((0, _.getShellProductChangeWarningEndpoint)());
exports.useShellProductChangeWarning = useShellProductChangeWarning;