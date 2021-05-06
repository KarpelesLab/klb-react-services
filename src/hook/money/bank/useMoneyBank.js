import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getMoneyBankAccountEndpoint,
	getMoneyBankWithdrawsEndpoint
}                                       from '../../../enpoints/money/bank/moneyBankEndpoints';

export const useMoneyBankWithdraws = () => useResourceList(getMoneyBankWithdrawsEndpoint());
export const useMoneyBankAccount = (id, params = null) => useResource(getMoneyBankAccountEndpoint(id), params);
