import { useResource } from '../useBaseHooks';

export const useMoneySwift = (code, isAba = false) => {
	const endpoint = isAba ? 'aba' : 'get';
	const param = isAba ? 'aba' : 'swift';
	return useResource(`Money/Swift:${endpoint}`, 'GET', { [param]: code });
};
