"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserWalletAutosEndpoint = exports.getUserWalletAutosEndpoint = function getUserWalletAutosEndpoint() {
  var walletId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return walletId ? "User/Wallet/" + walletId + "/Auto" : "User/Wallet/Auto";
};