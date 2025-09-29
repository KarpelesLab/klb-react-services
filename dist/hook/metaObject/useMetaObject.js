"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMetaObjectUnsetAccess = exports.useMetaObjectListAccess = exports.useMetaObjectLinkJoin = exports.useMetaObjectLinkAccess = void 0;
var _useBaseHooks = require("../useBaseHooks");
var _metaObjectEndpoints = require("../../enpoints/metaObject/metaObjectEndpoints");
var _react = require("react");
const useMetaObjectLinkAccess = metaObjectId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectLinkAccessEndpoint)(metaObjectId), 'POST');
  const doAction = (0, _react.useCallback)(function (access, expires) {
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
    let settingsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return _doAction({
      access: access,
      expires: expires,
      type: type
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useMetaObjectLinkAccess = useMetaObjectLinkAccess;
const useMetaObjectLinkJoin = () => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectLinkJoinEndpoint)(), 'POST');
  const doAction = (0, _react.useCallback)(function (id) {
    let settingsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _doAction({
      id: id
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useMetaObjectLinkJoin = useMetaObjectLinkJoin;
const useMetaObjectUnsetAccess = metaObjectId => {
  const [_doAction, loading] = (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectUnsetAccessEndpoint)(metaObjectId), 'POST');
  const doAction = (0, _react.useCallback)(function () {
    let user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let user_group = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    let settingsOverride = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return _doAction({
      user: user,
      user_group: user_group
    }, settingsOverride);
  }, []); //eslint-disable-line

  return [doAction, loading];
};
exports.useMetaObjectUnsetAccess = useMetaObjectUnsetAccess;
const useMetaObjectListAccess = metaObjectId => (0, _useBaseHooks.useAction)((0, _metaObjectEndpoints.getMetaObjectListAccessEndpoint)(metaObjectId), 'POST');
exports.useMetaObjectListAccess = useMetaObjectListAccess;