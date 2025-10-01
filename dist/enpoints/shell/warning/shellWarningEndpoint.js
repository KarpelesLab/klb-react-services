"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShellProductChangeWarningEndpoint = exports.getShellAccountWarningsEndpoint = void 0;
const getShellAccountWarningsEndpoint = () => 'Shell/Warning:getAccountWarnings';
exports.getShellAccountWarningsEndpoint = getShellAccountWarningsEndpoint;
const getShellProductChangeWarningEndpoint = () => 'Shell/Warning:getConcernedProductChangeShells';
exports.getShellProductChangeWarningEndpoint = getShellProductChangeWarningEndpoint;