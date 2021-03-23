'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useFileUploader = exports.useAction = exports.useResourceList = exports.useResource = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _useApiErrorHandler9 = require('./useApiErrorHandler');

var _klbfw = require('@karpeleslab/klbfw');

var _RestContext = require('../context/RestContext');

var deepCopy = function deepCopy(object) {
	return JSON.parse(JSON.stringify(object));
};

var useResource = exports.useResource = function useResource(endpoint) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var _useState = (0, _react.useState)(null),
	    _useState2 = _slicedToArray(_useState, 2),
	    resource = _useState2[0],
	    setResource = _useState2[1];

	var _useApiErrorHandler = (0, _useApiErrorHandler9.useApiErrorHandler)(),
	    _useApiErrorHandler2 = _slicedToArray(_useApiErrorHandler, 2),
	    catchRedirect = _useApiErrorHandler2[0],
	    handleError = _useApiErrorHandler2[1];

	var _useState3 = (0, _react.useState)(false),
	    _useState4 = _slicedToArray(_useState3, 2),
	    loading = _useState4[0],
	    setLoading = _useState4[1];

	var refresh = (0, _react.useCallback)(function (data) {
		if (data) {
			setResource(_extends({}, resource ? resource : {}, { data: data }));
			return;
		}

		setLoading(true);
		return (0, _klbfw.rest)(endpoint, 'GET', params).then(catchRedirect).then(function (r) {
			setResource(r);
			return r;
		}).catch(function (e) {
			setResource({ error: e });
			handleError(e);
		}).finally(function () {
			setLoading(false);
		});
	}, [resource]); //eslint-disable-line

	(0, _react.useEffect)(function () {
		refresh();
	}, []); //eslint-disable-line

	return [resource, refresh, loading];
};

var useResourceList = exports.useResourceList = function useResourceList(endpoint) {
	var _useState5 = (0, _react.useState)(null),
	    _useState6 = _slicedToArray(_useState5, 2),
	    list = _useState6[0],
	    setList = _useState6[1];

	var _useState7 = (0, _react.useState)(false),
	    _useState8 = _slicedToArray(_useState7, 2),
	    loading = _useState8[0],
	    setLoading = _useState8[1];

	var _useApiErrorHandler3 = (0, _useApiErrorHandler9.useApiErrorHandler)(),
	    _useApiErrorHandler4 = _slicedToArray(_useApiErrorHandler3, 2),
	    catchRedirect = _useApiErrorHandler4[0],
	    handleError = _useApiErrorHandler4[1];

	var _useState9 = (0, _react.useState)({}),
	    _useState10 = _slicedToArray(_useState9, 2),
	    lastFilter = _useState10[0],
	    setLastFilter = _useState10[1];

	var _useState11 = (0, _react.useState)({}),
	    _useState12 = _slicedToArray(_useState11, 2),
	    lastPaging = _useState12[0],
	    setLastPaging = _useState12[1];

	var fetch = (0, _react.useCallback)(function () {
		var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var paging = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		setLoading(true);
		if (filters) setLastFilter(lastFilter);
		if (paging) setLastPaging(lastFilter);

		return (0, _klbfw.rest)(endpoint, 'GET', _extends({}, filters ? filters : lastFilter, paging ? paging : lastPaging)).then(catchRedirect).then(function (list) {
			setList(list);
			return list;
		}).catch(handleError).finally(function () {
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
	rawResult: false,
	innerThen: null
};

var useAction = exports.useAction = function useAction(endpoint) {
	var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var settings = _extends({}, defaultSettings, restSettings);

	var _useState13 = (0, _react.useState)(false),
	    _useState14 = _slicedToArray(_useState13, 2),
	    loading = _useState14[0],
	    setLoading = _useState14[1];

	var _useApiErrorHandler5 = (0, _useApiErrorHandler9.useApiErrorHandler)(),
	    _useApiErrorHandler6 = _slicedToArray(_useApiErrorHandler5, 2),
	    catchRedirect = _useApiErrorHandler6[0],
	    handleError = _useApiErrorHandler6[1];

	var _useContext = (0, _react.useContext)(_RestContext.RestContext),
	    restContext = _useContext.restContext;

	var doAction = (0, _react.useCallback)(function () {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		settings = _extends({}, settings, settingsOverride);
		setLoading(true);
		return (0, _klbfw.rest)(endpoint, method, params).then(function (d) {
			return settings.catchRedirect ? catchRedirect(d) : d;
		}).then(function (d) {
			return settings.rawResult ? d : d.data;
		}).then(function (d) {
			return settings.innerThen ? settings.innerThen(d) : d;
		}).then(function (res) {
			if (restContext.snackMessageCallback && settings.snackMessageToken) restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
			return res;
		}).catch(function (d) {
			return settings.handleError ? handleError(d) : d;
		}).finally(function () {
			setLoading(false);
		});
	}, [endpoint, method]); //eslint-disable-line

	return [doAction, loading];
};

var useFileUploader = exports.useFileUploader = function useFileUploader() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var settings = _extends({}, defaultSettings, restSettings);

	var _useState15 = (0, _react.useState)(0),
	    _useState16 = _slicedToArray(_useState15, 2),
	    progress = _useState16[0],
	    setProgress = _useState16[1];

	var _useApiErrorHandler7 = (0, _useApiErrorHandler9.useApiErrorHandler)(),
	    _useApiErrorHandler8 = _slicedToArray(_useApiErrorHandler7, 2),
	    catchRedirect = _useApiErrorHandler8[0],
	    handleError = _useApiErrorHandler8[1];

	var _useState17 = (0, _react.useState)(false),
	    _useState18 = _slicedToArray(_useState17, 2),
	    uploading = _useState18[0],
	    setUploading = _useState18[1];

	var _useContext2 = (0, _react.useContext)(_RestContext.RestContext),
	    restContext = _useContext2.restContext;

	var doIt = (0, _react.useCallback)(function (endpoint, file, params) {
		var settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		settings = _extends({}, settings, settingsOverride);
		return new Promise(function (resolve, reject) {
			setUploading(true);
			_klbfw.upload.onprogress = function (d) {
				var blockTotal = 0;
				var progressTotal = 0;
				d.running.forEach(function (running) {
					if (running.status !== 'pending' && running.status !== 'complete') {
						progressTotal += running.done;
						blockTotal += running.blocks;
					}
				});

				if (d.failed.length > 0) {
					reject(d.failed[0].failure);
					return;
				}

				setProgress(blockTotal > 0 ? progressTotal / blockTotal : 0);
			};

			_klbfw.upload.append(endpoint, file, params).then(function (d) {
				return settings.catchRedirect ? catchRedirect(d) : d;
			}).then(resolve).catch(reject);

			_klbfw.upload.run();
		}).then(function (data) {
			return data.final;
		}).then(function (d) {
			return settings.innerThen ? settings.innerThen(d) : d;
		}).then(function (res) {
			if (restContext.snackMessageCallback && settings.snackMessageToken) restContext.snackMessageCallback(settings.snackMessageToken, settings.snackMessageSeverity, true);
			return res;
		}).catch(function (d) {
			return settings.handleError ? handleError(d) : d;
		}).finally(function () {
			return setUploading(false);
		});
	}, []); //eslint-disable-line

	return [doIt, uploading, progress];
};