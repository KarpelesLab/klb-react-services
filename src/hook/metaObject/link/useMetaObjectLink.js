import { useAction, useResource, useResourceList } from '../../useBaseHooks';
import {
	getMetaObjectLinkEndpoint,
	getMetaObjectLinksEndpoint
}                                                  from '../../../enpoints/metaObject/link/metaObjectLinkEndpoint';

export const useMetaObjectLinks = (metaObjectId, restSettings = null) => useResourceList(getMetaObjectLinksEndpoint(metaObjectId), restSettings);
export const useMetaObjectLink = (linkId, params = null, restSettings = null) => useResource(getMetaObjectLinkEndpoint(linkId), params, restSettings);

export const useMetaObjectLinksClear = metaObjectId => useAction(getMetaObjectLinksEndpoint(metaObjectId), 'DELETE');
export const useMetaObjectLinkDelete = linkId => useAction(getMetaObjectLinkEndpoint(linkId), 'DELETE');
