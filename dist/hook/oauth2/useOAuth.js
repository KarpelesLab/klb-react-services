'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useConsumerTokens = exports.useConsumerTokenUnlink = exports.useConsumerLink = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _useBaseHooks = require('../useBaseHooks');

var _react = require('react');

var _oauthEndpoints = require('../../enpoints/oauth2/oauthEndpoints');

var useConsumerLink = exports.useConsumerLink = function useConsumerLink(consumerId) {
	var _useAction = (0, _useBaseHooks.useAction)((0, _oauthEndpoints.getOAuth2ConsumerLinkEndpoint)(consumerId), 'POST', {
		rawResult: true,
		catchRedirect: false
	}),
	    _useAction2 = _slicedToArray(_useAction, 2),
	    _doAction = _useAction2[0],
	    loading = _useAction2[1];

	var doAction = (0, _react.useCallback)(function (return_to) {
		var settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		return _doAction({ return_to: return_to }, settingsOverride);
	}, []); //eslint-disable-line

	return [doAction, loading];
};
var useConsumerTokenUnlink = exports.useConsumerTokenUnlink = function useConsumerTokenUnlink(tokenId) {
	return (0, _useBaseHooks.useAction)((0, _oauthEndpoints.getOAuth2ConsumerTokenEndpoint)(tokenId), 'DELETE', { snackMessageToken: 'profile_oauth2_token_remove_success' });
};
var useConsumerTokens = exports.useConsumerTokens = function useConsumerTokens() {
	var restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	return (0, _useBaseHooks.useResourceList)((0, _oauthEndpoints.getOAuth2ConsumerTokensEndpoint)(), restSettings);
};