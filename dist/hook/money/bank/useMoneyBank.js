'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useMoneyBankAccount = exports.useMoneyBankWithdraws = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _moneyBankEndpoints = require('../../../enpoints/money/bank/moneyBankEndpoints');

var useMoneyBankWithdraws = exports.useMoneyBankWithdraws = function useMoneyBankWithdraws() {
	return (0, _useBaseHooks.useResourceList)((0, _moneyBankEndpoints.getMoneyBankWithdrawsEndpoint)());
};
var useMoneyBankAccount = exports.useMoneyBankAccount = function useMoneyBankAccount(id) {
	return (0, _useBaseHooks.useResource)((0, _moneyBankEndpoints.getMoneyBankAccountEndpoint)(id));
};