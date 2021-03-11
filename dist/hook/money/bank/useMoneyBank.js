'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMoneyBankAccount = exports.useMoneyBankWithdraws = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var useMoneyBankWithdraws = exports.useMoneyBankWithdraws = function useMoneyBankWithdraws() {
  return (0, _useBaseHooks.useResourceList)('Money/Bank/Withdraw');
};
var useMoneyBankAccount = exports.useMoneyBankAccount = function useMoneyBankAccount(id) {
  return (0, _useBaseHooks.useResource)('Money/Bank/Account/' + id);
};