export const getUserOTPsEndpoint = () => 'User/Otp';
export const getUserOTPEndpoint = otpId => `User/Otp/${otpId}`;
export const getUserOTPAssociateEndpoint = otpId => `User/Otp/${otpId}:associate`;
export const getUserOTPSetEndpoint = otpId => `User/Otp/${otpId}:set`;
export const getUserOTPUnsetEndpoint = otpId => `User/Otp/${otpId}:unset`;
