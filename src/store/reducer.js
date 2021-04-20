import { CHANGE_DEPOSIT_TYPE, LOAD_DATA, CHANGE_MONTH_VALUE } from './types';

const initialState = {
	data: null,
	depositType: null,
	periodFrom: null,
	monthValue: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({ ...state, data: payload }),
	[CHANGE_DEPOSIT_TYPE]: (state, { payload }) =>
		changeDepositTypeHelper(state, payload),
	[CHANGE_MONTH_VALUE]: (state, { payload }) => ({
		...state,
		monthValue: payload,
	}),
	default: (state) => state,
};

export const reducer = (state = initialState, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};

const changeDepositTypeHelper = (state, depositType) => {
	const periodFrom = state.data.find((item) => item.code === depositType)
		.param[0].period_from;

	return {
		...state,
		depositType,
		periodFrom,
		monthValue:
			state.monthValue < periodFrom ? periodFrom : state.monthValue,
	};
};
