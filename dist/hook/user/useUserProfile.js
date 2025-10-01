"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserProfileUpdateAvatar = exports.useUserProfileUpdate = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _userProfileEndpoints = require("../../enpoints/user/userProfileEndpoints");
const useUserProfileUpdate = userId => (0, _useBaseHooks.useAction)((0, _userProfileEndpoints.getUserProfileEndpoint)(userId), 'PATCH', {
  snackMessageToken: 'success_profile_updated'
});
exports.useUserProfileUpdate = useUserProfileUpdate;
const useUserProfileUpdateAvatar = userId => {
  const [_doUpload, uploading, progress] = (0, _useBaseHooks.useFileUploader)({
    snackMessageToken: 'custom_os_image_added_success'
  });
  const doAction = (0, _react.useCallback)(function (file, purpose) {
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doUpload((0, _userProfileEndpoints.getUserProfileAddImageEndpoint)(userId), file, {
      purpose: purpose
    }, settingsOverride);
  }, [userId]); //eslint-disable-line

  return [doAction, uploading, progress];
};
exports.useUserProfileUpdateAvatar = useUserProfileUpdateAvatar;