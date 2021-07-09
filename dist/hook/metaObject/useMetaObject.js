'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useMetaObjectListAccess = exports.useMetaObjectUnsetAccess = exports.useMetaObjectLinkJoin = exports.useMetaObjectLinkAccess = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _metaObjectEndpoints = require('../../enpoints/metaObject/metaObjectEndpoints');

var _react = require('react');

var useMetaObjectLinkAccess = exports.useMetaObjectLinkAccess = function useMetaObjectLinkAccess(metaObjectId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectLinkAccessEndpoint)(metaObjectId), 'POST'),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (access, expires) {
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
		var settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		return _doAction({
			access: access,
			expires: expires,
			type: type
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useMetaObjectLinkJoin = exports.useMetaObjectLinkJoin = function useMetaObjectLinkJoin() {
	var _useAction3 = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectLinkJoinEndpoint)(), 'POST'),
	    _useAction4 = _slicedToArray(_useAction3, 2),
	    _doAction = _useAction4[0],
	    loading = _useAction4[1];

	var doAction = (0, _react.useCallback)(function (id) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({
			id: id
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useMetaObjectUnsetAccess = exports.useMetaObjectUnsetAccess = function useMetaObjectUnsetAccess(metaObjectId) {
	var _useAction5 = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectUnsetAccessEndpoint)(metaObjectId), 'POST'),
	    _useAction6 = _slicedToArray(_useAction5, 2),
	    _doAction = _useAction6[0],
	    loading = _useAction6[1];

	var doAction = (0, _react.useCallback)(function () {
		var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var user_group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		return _doAction({
			user: user,
			user_group: user_group
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};

var useMetaObjectListAccess = exports.useMetaObjectListAccess = function useMetaObjectListAccess(metaObjectId) {
	return (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectListAccessEndpoint)(metaObjectId), 'POST');
};