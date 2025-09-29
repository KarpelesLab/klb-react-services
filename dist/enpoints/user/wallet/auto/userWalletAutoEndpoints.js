"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserWalletAutosEndpoint = void 0;
const getUserWalletAutosEndpoint = function () {
  let walletId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return walletId ? `User/Wallet/${walletId}/Auto` : `User/Wallet/Auto`;
};
exports.getUserWalletAutosEndpoint = getUserWalletAutosEndpoint;