import { CHANGE_DEPOSIT_TYPE, LOAD_DATA } from './types';

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});

export const changeDepositType = (payload) => ({
	type: CHANGE_DEPOSIT_TYPE,
	payload,
});
