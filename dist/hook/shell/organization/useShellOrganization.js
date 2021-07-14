'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useShellOrganizationCreate = exports.useShellOrganizationUpdate = exports.useShellOrganization = exports.useShellOrganizations = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../../useBaseHooks');

var _shellOrganizationEndpoints = require('../../../enpoints/shell/organization/shellOrganizationEndpoints');

var _react = require('react');

var _ = require('../../..');

var useShellOrganizations = exports.useShellOrganizations = function useShellOrganizations() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return (0, _useBaseHooks.useResourceList)((0, _shellOrganizationEndpoints.getShellOrganizationsEndpoint)(), restSettings);
};
var useShellOrganization = exports.useShellOrganization = function useShellOrganization(organizationId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _shellOrganizationEndpoints.getShellOrganizationEndpoint)(organizationId), params, restSettings);
};
var useShellOrganizationUpdate = exports.useShellOrganizationUpdate = function useShellOrganizationUpdate(organizationId) {
	return (0, _useBaseHooks.useAction)((0, _shellOrganizationEndpoints.getShellOrganizationEndpoint)(organizationId), 'PATCH', { snackMessageToken: 'shell_organization_update_success' });
};
var useShellOrganizationCreate = exports.useShellOrganizationCreate = function useShellOrganizationCreate() {
	var _useAction = (0, _useBaseHooks.useAction)((0, _shellOrganizationEndpoints.getShellOrganizationCreateEndpoint)(), 'POST', { snackMessageToken: 'shell_organization_create_success' }),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doCreate = _useAction2[0],
	    creating = _useAction2[1];

	var _useFileUploader = (0, _useBaseHooks.useFileUploader)(),
	    _useFileUploader2 = _slicedToArray(_useFileUploader, 3),
	    _doUpload = _useFileUploader2[0],
	    uploading = _useFileUploader2[1],
	    progress = _useFileUploader2[2];

	var doAction = (0, _react.useCallback)(function (name, settings, templateId, files) {
		var settingsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

		var params = { name: name, settings: settings, template: templateId };

		var buildUpload = function buildUpload(key, file, innerThen) {
			return function (org) {
				return _doUpload((0, _.getSettingUploadEndpoint)(org.Setting__), file, { key: key }, { innerThen: innerThen ? innerThen : undefined }).then(function () {
					return org;
				});
			};
		};

		var setOv = {};
		if (files) {
			var last = null;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.entries(files)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref = _step.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var settingKey = _ref2[0];
					var file = _ref2[1];

					last = buildUpload(settingKey, file, last);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			setOv = { innerThen: last };
		}

		return _doCreate(params, setOv);
	}, []); //eslint-disable-line

	return [doAction, creating || uploading, progress];
};