'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useMoneySwift = undefined;

var _useBaseHooks = require('../useBaseHooks');

var _moneyEndpoints = require('../../enpoints/money/moneyEndpoints');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useMoneySwift = exports.useMoneySwift = function useMoneySwift(code) {
	var isAba = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	var endpoint = isAba ? (0, _moneyEndpoints.getMoneySwiftAbaEndpoint)() : (0, _moneyEndpoints.getMoneySwiftEndpoint)();
	var param = isAba ? 'aba' : 'swift';
	return (0, _useBaseHooks.useResource)(endpoint, 'GET', _defineProperty({}, param, code));
};