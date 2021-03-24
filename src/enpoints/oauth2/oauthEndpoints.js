export const getOAuth2ConsumerLinkEndpoint = consumerId => `OAuth2/Consumer/${consumerId}:link`;
export const getOAuth2ConsumerTokenEndpoint = tokenId => `OAuth2/Consumer/Token/${tokenId}`
export const getOAuth2ConsumerTokensEndpoint = () => 'OAuth2/Consumer/Token'
export const getOAuth2ConsumersEndpoint = () => 'OAuth2/Consumer'
