"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMetaObjectLinksClear = exports.useMetaObjectLinks = exports.useMetaObjectLinkDelete = exports.useMetaObjectLink = void 0;
var _useBaseHooks = require("../../useBaseHooks");
var _metaObjectLinkEndpoint = require("../../../enpoints/metaObject/link/metaObjectLinkEndpoint");
const useMetaObjectLinks = function (metaObjectId) {
  let restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (0, _useBaseHooks.useResourceList)((0, _metaObjectLinkEndpoint.getMetaObjectLinksEndpoint)(metaObjectId), restSettings);
};
exports.useMetaObjectLinks = useMetaObjectLinks;
const useMetaObjectLink = function (linkId) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return (0, _useBaseHooks.useResource)((0, _metaObjectLinkEndpoint.getMetaObjectLinkEndpoint)(linkId), params, restSettings);
};
exports.useMetaObjectLink = useMetaObjectLink;
const useMetaObjectLinksClear = metaObjectId => (0, _useBaseHooks.useAction)((0, _metaObjectLinkEndpoint.getMetaObjectLinksEndpoint)(metaObjectId), 'DELETE');
exports.useMetaObjectLinksClear = useMetaObjectLinksClear;
const useMetaObjectLinkDelete = linkId => (0, _useBaseHooks.useAction)((0, _metaObjectLinkEndpoint.getMetaObjectLinkEndpoint)(linkId), 'DELETE');
exports.useMetaObjectLinkDelete = useMetaObjectLinkDelete;