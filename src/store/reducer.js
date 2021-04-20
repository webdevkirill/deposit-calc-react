import {
	CHANGE_DEPOSIT_TYPE,
	LOAD_DATA,
	CHANGE_MONTH_VALUE,
	CHANGE_SUM_VALUE,
} from './types';

const initialState = {
	data: null,
	depositType: null,
	periodFrom: null,
	monthValue: null,
	sumFrom: null,
	depositeSumValue: null,
	rate: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({ ...state, data: payload }),
	[CHANGE_DEPOSIT_TYPE]: (state, { payload }) =>
		changeDepositHelper(state, payload),
	[CHANGE_MONTH_VALUE]: (state, { payload }) =>
		changeMonthCountHandler(state, payload),
	[CHANGE_SUM_VALUE]: (state, { payload }) =>
		changeSumValueHandler(state, payload),
	default: (state) => state,
};

export const reducer = (state = initialState, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};

const changeDepositHelper = (state, depositType) => {
	depositType = depositType ? depositType : state.depositType;
	const depositeParams = state.data.find((item) => item.code === depositType)
		.param;
	const periodFrom = depositeParams[0].period_from;
	const monthValue =
		state.monthValue < periodFrom ? periodFrom : state.monthValue;

	const summParams = depositeParams.find(
		(item, idx) =>
			idx === depositeParams.length - 1 ||
			monthValue < depositeParams[idx + 1].period_from
	).summs_and_rate;

	const sumFrom = summParams[0].summ_from;

	let depositeSumValue, rate;

	if (!state.depositeSumValue) {
		rate = summParams[0].rate;
		depositeSumValue = sumFrom;
	} else {
		const neededSummParams = summParams.find(
			(item, idx) =>
				idx === summParams.length - 1 ||
				state.depositeSumValue < summParams[idx + 1].summ_from
		);
		console.log(neededSummParams);
		rate = neededSummParams.rate;
		depositeSumValue =
			state.depositeSumValue < sumFrom ? sumFrom : state.depositeSumValue;
	}

	return {
		...state,
		depositType,
		periodFrom,
		monthValue,
		sumFrom,
		rate,
		depositeSumValue,
	};
};

const changeMonthCountHandler = (state, payload) => {
	const rateAndSumParams = changeDepositHelper({
		...state,
		monthValue: payload,
	});
	return {
		...state,
		monthValue: payload,
		...rateAndSumParams,
	};
};

const changeSumValueHandler = (state, payload) => {
	const rateAndSumParams = changeDepositHelper({
		...state,
		depositeSumValue: payload,
	});
	return {
		...state,
		depositeSumValue: payload,
		...rateAndSumParams,
	};
};
