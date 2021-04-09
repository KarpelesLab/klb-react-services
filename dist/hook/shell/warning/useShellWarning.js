'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShellProductChangeWarning = exports.useShellAccountWarnings = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _ = require('../../..');

var useShellAccountWarnings = exports.useShellAccountWarnings = function useShellAccountWarnings() {
  return (0, _useBaseHooks.useAction)((0, _.getShellAccountWarningsEndpoint)());
};
var useShellProductChangeWarning = exports.useShellProductChangeWarning = function useShellProductChangeWarning() {
  return (0, _useBaseHooks.useAction)((0, _.getShellProductChangeWarningEndpoint)());
};