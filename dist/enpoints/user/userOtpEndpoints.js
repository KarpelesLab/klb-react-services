"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserOTPsEndpoint = exports.getUserOTPUnsetEndpoint = exports.getUserOTPSetEndpoint = exports.getUserOTPEndpoint = exports.getUserOTPAssociateEndpoint = void 0;
const getUserOTPsEndpoint = () => 'User/Otp';
exports.getUserOTPsEndpoint = getUserOTPsEndpoint;
const getUserOTPEndpoint = otpId => `User/Otp/${otpId}`;
exports.getUserOTPEndpoint = getUserOTPEndpoint;
const getUserOTPAssociateEndpoint = otpId => `User/Otp/${otpId}:associate`;
exports.getUserOTPAssociateEndpoint = getUserOTPAssociateEndpoint;
const getUserOTPSetEndpoint = otpId => `User/Otp/${otpId}:set`;
exports.getUserOTPSetEndpoint = getUserOTPSetEndpoint;
const getUserOTPUnsetEndpoint = otpId => `User/Otp/${otpId}:unset`;
exports.getUserOTPUnsetEndpoint = getUserOTPUnsetEndpoint;