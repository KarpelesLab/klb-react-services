import { useAction }   from '../useBaseHooks';
import {
	getMetaObjectLinkAccessEndpoint,
	getMetaObjectListAccessEndpoint,
	getMetaObjectUnsetAccessEndpoint
}                      from '../../enpoints/metaObject/metaObjectEndpoints';
import { useCallback } from 'react';

export const useMetaObjectLinkAccess = (metaObjectId) => {
	const [_doAction, loading] = useAction(getMetaObjectLinkAccessEndpoint(metaObjectId), 'POST');

	const doAction = useCallback((access, expires, type = 'unknown', settingsOverride = {}) => _doAction({
		access: access,
		expires: expires,
		type: type,
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useMetaObjectLinkJoin = () => {
	const [_doAction, loading] = useAction(getMetaObjectLinkAccessEndpoint(), 'POST');

	const doAction = useCallback((id, settingsOverride = {}) => _doAction({
		id: id,
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useMetaObjectUnsetAccess = (metaObjectId) => {
	const [_doAction, loading] = useAction(getMetaObjectUnsetAccessEndpoint(metaObjectId), 'POST');

	const doAction = useCallback((user = null, user_group = null, settingsOverride = {}) => _doAction({
		user: user,
		user_group: user_group,
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};

export const useMetaObjectListAccess = metaObjectId => useAction(getMetaObjectListAccessEndpoint(metaObjectId), 'POST');

