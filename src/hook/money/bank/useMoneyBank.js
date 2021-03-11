import { useResource, useResourceList } from '../../useBaseHooks';

export const useMoneyBankWithdraws = () => useResourceList('Money/Bank/Withdraw');
export const useMoneyBankAccount = id => useResource(`Money/Bank/Account/${id}`);
