import { useResource, useResourceList } from '../../useBaseHooks';
import {
	getMoneyBankAccountEndpoint,
	getMoneyBankWithdrawsEndpoint
}                                       from '../../../enpoints/money/bank/moneyBankEndpoints';

export const useMoneyBankWithdraws = (restSettings = null) => useResourceList(getMoneyBankWithdrawsEndpoint(), restSettings);
export const useMoneyBankAccount = (id, params = null, restSettings = null) => useResource(getMoneyBankAccountEndpoint(id), params, restSettings);
