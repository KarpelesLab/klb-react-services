'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUserOTPsEndpoint = exports.getUserOTPsEndpoint = function getUserOTPsEndpoint() {
  return 'User/Otp';
};
var getUserOTPEndpoint = exports.getUserOTPEndpoint = function getUserOTPEndpoint(otpId) {
  return 'User/Otp/' + otpId;
};
var getUserOTPAssociateEndpoint = exports.getUserOTPAssociateEndpoint = function getUserOTPAssociateEndpoint(otpId) {
  return 'User/Otp/' + otpId + ':associate';
};
var getUserOTPSetEndpoint = exports.getUserOTPSetEndpoint = function getUserOTPSetEndpoint(otpId) {
  return 'User/Otp/' + otpId + ':set';
};
var getUserOTPUnsetEndpoint = exports.getUserOTPUnsetEndpoint = function getUserOTPUnsetEndpoint(otpId) {
  return 'User/Otp/' + otpId + ':unset';
};