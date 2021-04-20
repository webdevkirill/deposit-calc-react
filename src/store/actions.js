import { CHANGE_DEPOSIT_TYPE, LOAD_DATA, SET_PERIOD_FROM } from './types';

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});

export const changeDepositType = (payload) => ({
	type: CHANGE_DEPOSIT_TYPE,
	payload,
});

export const setPeriodFrom = (payload) => ({
	type: SET_PERIOD_FROM,
	payload,
});
