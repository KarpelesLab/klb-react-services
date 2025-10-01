"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetaObjectLinksEndpoint = exports.getMetaObjectLinkEndpoint = void 0;
const getMetaObjectLinksEndpoint = metaObjectId => `MetaObject/${metaObjectId}/Link`;
exports.getMetaObjectLinksEndpoint = getMetaObjectLinksEndpoint;
const getMetaObjectLinkEndpoint = linkId => `MetaObject/Link/${linkId}`;
exports.getMetaObjectLinkEndpoint = getMetaObjectLinkEndpoint;