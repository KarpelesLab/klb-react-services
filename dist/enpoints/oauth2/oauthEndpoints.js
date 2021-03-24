'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getOAuth2ConsumerLinkEndpoint = exports.getOAuth2ConsumerLinkEndpoint = function getOAuth2ConsumerLinkEndpoint(consumerId) {
  return 'OAuth2/Consumer/' + consumerId + ':link';
};
var getOAuth2ConsumerTokenEndpoint = exports.getOAuth2ConsumerTokenEndpoint = function getOAuth2ConsumerTokenEndpoint(tokenId) {
  return 'OAuth2/Consumer/Token/' + tokenId;
};
var getOAuth2ConsumerTokensEndpoint = exports.getOAuth2ConsumerTokensEndpoint = function getOAuth2ConsumerTokensEndpoint() {
  return 'OAuth2/Consumer/Token';
};
var getOAuth2ConsumersEndpoint = exports.getOAuth2ConsumersEndpoint = function getOAuth2ConsumersEndpoint() {
  return 'OAuth2/Consumer';
};