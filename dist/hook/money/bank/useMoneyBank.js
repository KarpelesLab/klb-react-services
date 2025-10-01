"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMoneyBankWithdraws = exports.useMoneyBankAccount = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _moneyBankEndpoints = require("../../../enpoints/money/bank/moneyBankEndpoints");
const useMoneyBankWithdraws = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _moneyBankEndpoints.getMoneyBankWithdrawsEndpoint)(), restSettings);
};
exports.useMoneyBankWithdraws = useMoneyBankWithdraws;
const useMoneyBankAccount = function (id) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _moneyBankEndpoints.getMoneyBankAccountEndpoint)(id), params, restSettings);
};
exports.useMoneyBankAccount = useMoneyBankAccount;