'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useAffiliateExportOrder = exports.useUserWallets = exports.useAffiliate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _affiliateEndpoints = require('../../enpoints/affiliate/affiliateEndpoints');

var _react = require('react');

var useAffiliate = exports.useAffiliate = function useAffiliate(id) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResource)((0, _affiliateEndpoints.getAffiliateEndpoint)(id), params);
};
var useUserWallets = exports.useUserWallets = function useUserWallets(userId) {
	return (0, _useBaseHooks.useResourceList)((0, _affiliateEndpoints.getUserWalletsEndpoint)(userId));
};
var useAffiliateExportOrder = exports.useAffiliateExportOrder = function useAffiliateExportOrder(affiliateId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _affiliateEndpoints.getAffiliateExportOrdersEndpoint)(affiliateId), 'POST'),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function () {
		var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({
			year: year
		}, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};