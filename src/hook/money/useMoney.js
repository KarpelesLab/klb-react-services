import { useResource }                                     from '../useBaseHooks';
import { getMoneySwiftAbaEndpoint, getMoneySwiftEndpoint } from '../../enpoints/money/moneyEndpoints';
import { useEffect, useState }                             from 'react';

export const useMoneySwift = (code, isAba = false, restSettings = null) => {
	const param = isAba ? 'aba' : 'swift';
	const [params, setParams] = useState({ [param]: code });
	const [endpoint, setEndpoint] = useState(isAba ? getMoneySwiftAbaEndpoint() : getMoneySwiftEndpoint());

	useEffect(() => {
		const param = isAba ? 'aba' : 'swift';
		setParams({ [param]: code });
		setEndpoint(isAba ? getMoneySwiftAbaEndpoint() : getMoneySwiftEndpoint());
	}, [code, isAba, setParams, setEndpoint]);

	return useResource(endpoint, params, restSettings);
};
