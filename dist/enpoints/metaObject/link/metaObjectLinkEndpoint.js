"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMetaObjectLinksEndpoint = exports.getMetaObjectLinksEndpoint = function getMetaObjectLinksEndpoint(metaObjectId) {
  return "MetaObject/" + metaObjectId + "/Link";
};
var getMetaObjectLinkEndpoint = exports.getMetaObjectLinkEndpoint = function getMetaObjectLinkEndpoint(linkId) {
  return "MetaObject/Link/" + linkId;
};