'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.useMetaObjectLinkDelete = exports.useMetaObjectLinksClear = exports.useMetaObjectLink = exports.useMetaObjectLinks = undefined;

var _useBaseHooks = require('../../useBaseHooks');

var _metaObjectLinkEndpoint = require('../../../enpoints/metaObject/link/metaObjectLinkEndpoint');

var useMetaObjectLinks = exports.useMetaObjectLinks = function useMetaObjectLinks(metaObjectId) {
	var restSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _useBaseHooks.useResourceList)((0, _metaObjectLinkEndpoint.getMetaObjectLinksEndpoint)(metaObjectId), restSettings);
};
var useMetaObjectLink = exports.useMetaObjectLink = function useMetaObjectLink(linkId) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	var restSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	return (0, _useBaseHooks.useResource)((0, _metaObjectLinkEndpoint.getMetaObjectLinkEndpoint)(linkId), params, restSettings);
};

var useMetaObjectLinksClear = exports.useMetaObjectLinksClear = function useMetaObjectLinksClear(metaObjectId) {
	return (0, _useBaseHooks.useAction)((0, _metaObjectLinkEndpoint.getMetaObjectLinksEndpoint)(metaObjectId), 'DELETE');
};
var useMetaObjectLinkDelete = exports.useMetaObjectLinkDelete = function useMetaObjectLinkDelete(linkId) {
	return (0, _useBaseHooks.useAction)((0, _metaObjectLinkEndpoint.getMetaObjectLinkEndpoint)(linkId), 'DELETE');
};