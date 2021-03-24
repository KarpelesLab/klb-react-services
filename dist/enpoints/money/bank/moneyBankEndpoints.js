'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMoneyBankWithdrawsEndpoint = exports.getMoneyBankWithdrawsEndpoint = function getMoneyBankWithdrawsEndpoint() {
  return 'Money/Bank/Withdraw';
};
var getMoneyBankAccountEndpoint = exports.getMoneyBankAccountEndpoint = function getMoneyBankAccountEndpoint(id) {
  return 'Money/Bank/Account/' + id;
};