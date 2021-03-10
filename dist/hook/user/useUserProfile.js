'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useUserProfileUpdateAvatar = exports.useUserProfileUpdate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var useUserProfileUpdate = exports.useUserProfileUpdate = function useUserProfileUpdate(userId) {
	return (0, _useBaseHooks.useAction)('User/' + userId + '/Profile', 'PATCH', { snackMessageToken: 'success_profile_updated' });
};
var useUserProfileUpdateAvatar = exports.useUserProfileUpdateAvatar = function useUserProfileUpdateAvatar(userId) {
	var _useFileUploader = (0, _useBaseHooks.useFileUploader)({ snackMessageToken: 'custom_os_image_added_success' }),
	    _useFileUploader2 = _slicedToArray(_useFileUploader, 3),
	    _doUpload = _useFileUploader2[0],
	    uploading = _useFileUploader2[1],
	    progress = _useFileUploader2[2];

	var doAction = (0, _react.useCallback)(function (file, purpose) {
		return _doUpload('User/' + userId + '/Profile:addImage', file, { purpose: purpose });
	}, [userId]); //eslint-disable-line

	return [doAction, uploading, progress];
};