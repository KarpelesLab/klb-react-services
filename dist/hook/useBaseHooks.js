'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useAction = exports.useResourceList = exports.useResource = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _useApiErrorHandler7 = require('./useApiErrorHandler');

var _klbfw = require('@karpeleslab/klbfw');

var _RestContext = require('../context/RestContext');

var deepCopy = function deepCopy(object) {
	return JSON.parse(JSON.stringify(object));
};

var useResource = exports.useResource = function useResource(endpoint) {
	var _useState = (0, _react.useState)(null),
	    _useState2 = _slicedToArray(_useState, 2),
	    resource = _useState2[0],
	    setResource = _useState2[1];

	var _useApiErrorHandler = (0, _useApiErrorHandler7.useApiErrorHandler)(),
	    _useApiErrorHandler2 = _slicedToArray(_useApiErrorHandler, 2),
	    catchRedirect = _useApiErrorHandler2[0],
	    handleError = _useApiErrorHandler2[1];

	var refresh = (0, _react.useCallback)(function (data) {
		if (data) {
			setResource(_extends({}, resource ? resource : {}, { data: data }));
			return;
		}

		return (0, _klbfw.rest)(endpoint).then(catchRedirect).then(setResource).catch(function (e) {
			setResource({ error: e });
			handleError(e);
		});
	}, [resource]); //eslint-disable-line

	(0, _react.useEffect)(function () {
		refresh();
	}, []); //eslint-disable-line

	return [resource, refresh];
};

var useResourceList = exports.useResourceList = function useResourceList(endpoint) {
	var _useState3 = (0, _react.useState)(null),
	    _useState4 = _slicedToArray(_useState3, 2),
	    list = _useState4[0],
	    setList = _useState4[1];

	var _useState5 = (0, _react.useState)(false),
	    _useState6 = _slicedToArray(_useState5, 2),
	    loading = _useState6[0],
	    setLoading = _useState6[1];

	var _useApiErrorHandler3 = (0, _useApiErrorHandler7.useApiErrorHandler)(),
	    _useApiErrorHandler4 = _slicedToArray(_useApiErrorHandler3, 2),
	    catchRedirect = _useApiErrorHandler4[0],
	    handleError = _useApiErrorHandler4[1];

	var _useState7 = (0, _react.useState)({}),
	    _useState8 = _slicedToArray(_useState7, 2),
	    lastFilter = _useState8[0],
	    setLastFilter = _useState8[1];

	var _useState9 = (0, _react.useState)({}),
	    _useState10 = _slicedToArray(_useState9, 2),
	    lastPaging = _useState10[0],
	    setLastPaging = _useState10[1];

	var fetch = (0, _react.useCallback)(function () {
		var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var paging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		setLoading(true);
		if (filters) setLastFilter(lastFilter);
		if (paging) setLastPaging(lastFilter);

		return (0, _klbfw.rest)(endpoint, 'GET', _extends({}, filters ? filters : lastFilter, paging ? paging : lastPaging)).then(catchRedirect).then(setList).catch(handleError).finally(function () {
			return setLoading(false);
		});
	}, []); //eslint-disable-line

	var setItem = function setItem(idx, item) {
		var cpy = deepCopy(list);
		cpy.data[idx] = item;
		setList(cpy);
	};

	return [list, fetch, loading, setItem];
};

var defaultSettings = {
	snackMessageToken: null,
	snackMessageSeverity: 'success',
	catchRedirect: true,
	handleError: true,
	rawResult: false
};

var useAction = exports.useAction = function useAction(endpoint) {
	var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var settings = _extends({}, defaultSettings, restSettings);

	var _useState11 = (0, _react.useState)(false),
	    _useState12 = _slicedToArray(_useState11, 2),
	    loading = _useState12[0],
	    setLoading = _useState12[1];

	var _useApiErrorHandler5 = (0, _useApiErrorHandler7.useApiErrorHandler)(),
	    _useApiErrorHandler6 = _slicedToArray(_useApiErrorHandler5, 2),
	    catchRedirect = _useApiErrorHandler6[0],
	    handleError = _useApiErrorHandler6[1];

	var _useContext = (0, _react.useContext)(_RestContext.RestContext),
	    restContext = _useContext.restContext;

	var doAction = (0, _react.useCallback)(function () {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		setLoading(true);
		return (0, _klbfw.rest)(endpoint, method, params).then(function (d) {
			return settings.catchRedirect ? catchRedirect(d) : d;
		}).then(function (res) {
			if (restContext.snackMessageCallback && settings.snackMessageToken) restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
			if (settings.rawResult) return res;
			return res.data;
		}).catch(function (d) {
			return settings.handleError ? handleError(d) : d;
		}).finally(function () {
			setLoading(false);
		});
	}, [endpoint, method]); //eslint-disable-line

	return [doAction, loading];
};