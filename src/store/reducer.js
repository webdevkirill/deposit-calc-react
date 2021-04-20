import { CHANGE_DEPOSIT_TYPE, LOAD_DATA, SET_PERIOD_FROM } from './types';

const initialState = {
	data: null,
	depositType: null,
	periodFrom: null,
};

const handlers = {
	[LOAD_DATA]: (state, { payload }) => ({ ...state, data: payload }),
	[CHANGE_DEPOSIT_TYPE]: (state, { payload }) => ({
		...state,
		depositType: payload,
	}),
	[SET_PERIOD_FROM]: (state, { payload }) => ({
		...state,
		periodFrom: payload,
	}),
	default: (state) => state,
};

export const reducer = (state = initialState, action) => {
	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
};
