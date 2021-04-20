import {
	CHANGE_DEPOSIT_TYPE,
	LOAD_DATA,
	CHANGE_MONTH_VALUE,
	CHANGE_SUM_VALUE,
} from './types';

export const loadData = (payload) => ({
	type: LOAD_DATA,
	payload,
});

export const changeDepositType = (payload) => ({
	type: CHANGE_DEPOSIT_TYPE,
	payload,
});

export const changeMonthValue = (payload) => ({
	type: CHANGE_MONTH_VALUE,
	payload,
});

export const changeSumValue = (payload) => ({
	type: CHANGE_SUM_VALUE,
	payload,
});
