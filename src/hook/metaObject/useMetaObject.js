import { useAction } from '../useBaseHooks';
import { getMetaObjectLinkAccessEndpoint } from '../../enpoints/metaObject/metaObjectEndpoints';
import { useCallback } from 'react';

export const useMetaObjectLinkAccess = (metaObjectId) => {
	const [_doAction, loading] = useAction(getMetaObjectLinkAccessEndpoint(metaObjectId), 'POST');

	const doAction = useCallback((access, expires, settingsOverride = {}) => _doAction({
		access: access,
		expires: expires
	}, settingsOverride), []); //eslint-disable-line

	return [doAction, loading];
};
