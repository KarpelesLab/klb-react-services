"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetaObjectUnsetAccessEndpoint = exports.getMetaObjectListAccessEndpoint = exports.getMetaObjectLinkJoinEndpoint = exports.getMetaObjectLinkAccessEndpoint = void 0;
const getMetaObjectLinkAccessEndpoint = metaObjectId => `MetaObject/${metaObjectId}:linkAccess`;
exports.getMetaObjectLinkAccessEndpoint = getMetaObjectLinkAccessEndpoint;
const getMetaObjectLinkJoinEndpoint = () => 'MetaObject:linkJoin';
exports.getMetaObjectLinkJoinEndpoint = getMetaObjectLinkJoinEndpoint;
const getMetaObjectUnsetAccessEndpoint = metaObjectId => `MetaObject/${metaObjectId}:unsetAccess`;
exports.getMetaObjectUnsetAccessEndpoint = getMetaObjectUnsetAccessEndpoint;
const getMetaObjectListAccessEndpoint = metaObjectId => `MetaObject/${metaObjectId}:listAccess`;
exports.getMetaObjectListAccessEndpoint = getMetaObjectListAccessEndpoint;