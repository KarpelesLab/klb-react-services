"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMetaObjectLinkAccessEndpoint = exports.getMetaObjectLinkAccessEndpoint = function getMetaObjectLinkAccessEndpoint(metaObjectId) {
  return "MetaObject/" + metaObjectId + ":linkAccess";
};