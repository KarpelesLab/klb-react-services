import { useResource }                                     from '../useBaseHooks';
import { getMoneySwiftAbaEndpoint, getMoneySwiftEndpoint } from '../../enpoints/money/moneyEndpoints';

export const useMoneySwift = (code, isAba = false) => {
	const endpoint = isAba ? getMoneySwiftAbaEndpoint() : getMoneySwiftEndpoint();
	const param = isAba ? 'aba' : 'swift';
	return useResource(endpoint, 'GET', { [param]: code });
};
