import { CHANGE_DEPOSIT_TYPE, LOAD_DATA } from './types';

const initialState = {
	data: null,
	depositType: null,
	periodFrom: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({ ...state, data: payload }),
	[CHANGE_DEPOSIT_TYPE]: (state, { payload }) =>
		changeDepositTypeHelper(state, payload),
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
	};
};
