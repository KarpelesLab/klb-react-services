"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMoneyBankWithdrawsEndpoint = exports.getMoneyBankAccountEndpoint = void 0;
const getMoneyBankWithdrawsEndpoint = () => 'Money/Bank/Withdraw';
exports.getMoneyBankWithdrawsEndpoint = getMoneyBankWithdrawsEndpoint;
const getMoneyBankAccountEndpoint = id => `Money/Bank/Account/${id}`;
exports.getMoneyBankAccountEndpoint = getMoneyBankAccountEndpoint;