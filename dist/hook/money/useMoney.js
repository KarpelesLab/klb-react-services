'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useMoneySwift = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _moneyEndpoints = require('../../enpoints/money/moneyEndpoints');

var _react = require('react');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useMoneySwift = exports.useMoneySwift = function useMoneySwift(code) {
	var isAba = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	var param = isAba ? 'aba' : 'swift';

	var _useState = (0, _react.useState)(_defineProperty({}, param, code)),
	    _useState2 = _slicedToArray(_useState, 2),
	    params = _useState2[0],
	    setParams = _useState2[1];

	var _useState4 = (0, _react.useState)(isAba ? (0, _moneyEndpoints.getMoneySwiftAbaEndpoint)() : (0, _moneyEndpoints.getMoneySwiftEndpoint)()),
	    _useState5 = _slicedToArray(_useState4, 2),
	    endpoint = _useState5[0],
	    setEndpoint = _useState5[1];

	(0, _react.useEffect)(function () {
		var param = isAba ? 'aba' : 'swift';
		setParams(_defineProperty({}, param, code));
		setEndpoint(isAba ? (0, _moneyEndpoints.getMoneySwiftAbaEndpoint)() : (0, _moneyEndpoints.getMoneySwiftEndpoint)());
	}, [code, isAba, setParams, setEndpoint]);

	return (0, _useBaseHooks.useResource)(endpoint, 'GET', params, restSettings);
};