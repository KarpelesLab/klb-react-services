"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConsumerTokens = exports.useConsumerTokenUnlink = exports.useConsumerLink = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _react = require("react");
var _oauthEndpoints = require("../../enpoints/oauth2/oauthEndpoints");
const useConsumerLink = consumerId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _oauthEndpoints.getOAuth2ConsumerLinkEndpoint)(consumerId), 'POST', {
    rawResult: true,
    catchRedirect: false
  });
  const doAction = (0, _react.useCallback)(function (return_to) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      return_to: return_to
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useConsumerLink = useConsumerLink;
const useConsumerTokenUnlink = tokenId => (0, _useBaseHooks.useAction)((0, _oauthEndpoints.getOAuth2ConsumerTokenEndpoint)(tokenId), 'DELETE', {
  snackMessageToken: 'profile_oauth2_token_remove_success'
});
exports.useConsumerTokenUnlink = useConsumerTokenUnlink;
const useConsumerTokens = function () {
  let restSettings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _useBaseHooks.useResourceList)((0, _oauthEndpoints.getOAuth2ConsumerTokensEndpoint)(), restSettings);
};
exports.useConsumerTokens = useConsumerTokens;