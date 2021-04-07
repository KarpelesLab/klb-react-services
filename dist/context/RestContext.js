'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RestContextContainer = exports.RestContext = exports.defaultRestContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRestContext = exports.defaultRestContext = {
	snackMessageCallback: null,
	logoutUserCallback: null,
	restErrorCallback: null,
	lastError: null
};
var RestContext = exports.RestContext = (0, _react.createContext)(defaultRestContext);

var RestContextContainer = exports.RestContextContainer = function RestContextContainer(_ref) {
	var children = _ref.children;

	var _useState = (0, _react.useState)(defaultRestContext),
	    _useState2 = _slicedToArray(_useState, 2),
	    restContext = _useState2[0],
	    setContext = _useState2[1];

	var setSnackMessageCallback = (0, _react.useCallback)(function (callback) {
		setContext(function (prev) {
			return _extends({}, prev, { snackMessageCallback: callback });
		});
	}, [setContext]); // eslint-disable-line

	var setRestErrorCallbackCallback = (0, _react.useCallback)(function (callback) {
		setContext(function (prev) {
			return _extends({}, prev, { restErrorCallback: callback });
		});
	}, [setContext]); // eslint-disable-line


	var setLogoutUserCallback = (0, _react.useCallback)(function (callback) {
		setContext(function (prev) {
			return _extends({}, prev, { logoutUserCallback: callback });
		});
	}, [setContext]); // eslint-disable-line

	var setLastError = (0, _react.useCallback)(function (lastError) {
		setContext(function (prev) {
			return _extends({}, prev, { lastError: lastError });
		});
	}, [setContext]); // eslint-disable-line

	return _react2.default.createElement(
		RestContext.Provider,
		{
			value: { restContext: restContext, setSnackMessageCallback: setSnackMessageCallback, setLogoutUserCallback: setLogoutUserCallback, setRestErrorCallbackCallback: setRestErrorCallbackCallback, setLastError: setLastError } },
		children
	);
};