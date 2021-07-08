'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getMetaObjectLinkAccessEndpoint = exports.getMetaObjectLinkAccessEndpoint = function getMetaObjectLinkAccessEndpoint(metaObjectId) {
  return 'MetaObject/' + metaObjectId + ':linkAccess';
};
var getMetaObjectLinkJoinEndpoint = exports.getMetaObjectLinkJoinEndpoint = function getMetaObjectLinkJoinEndpoint() {
  return 'MetaObject:linkJoin';
};
var getMetaObjectUnsetAccessEndpoint = exports.getMetaObjectUnsetAccessEndpoint = function getMetaObjectUnsetAccessEndpoint(metaObjectId) {
  return 'MetaObject/' + metaObjectId + ':unsetAccess';
};
var getMetaObjectListAccessEndpoint = exports.getMetaObjectListAccessEndpoint = function getMetaObjectListAccessEndpoint(metaObjectId) {
  return 'MetaObject/' + metaObjectId + ':listAccess';
};