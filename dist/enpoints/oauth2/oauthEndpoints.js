"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOAuth2ConsumersEndpoint = exports.getOAuth2ConsumerTokensEndpoint = exports.getOAuth2ConsumerTokenEndpoint = exports.getOAuth2ConsumerLinkEndpoint = void 0;
const getOAuth2ConsumerLinkEndpoint = consumerId => `OAuth2/Consumer/${consumerId}:link`;
exports.getOAuth2ConsumerLinkEndpoint = getOAuth2ConsumerLinkEndpoint;
const getOAuth2ConsumerTokenEndpoint = tokenId => `OAuth2/Consumer/Token/${tokenId}`;
exports.getOAuth2ConsumerTokenEndpoint = getOAuth2ConsumerTokenEndpoint;
const getOAuth2ConsumerTokensEndpoint = () => 'OAuth2/Consumer/Token';
exports.getOAuth2ConsumerTokensEndpoint = getOAuth2ConsumerTokensEndpoint;
const getOAuth2ConsumersEndpoint = () => 'OAuth2/Consumer';
exports.getOAuth2ConsumersEndpoint = getOAuth2ConsumersEndpoint;