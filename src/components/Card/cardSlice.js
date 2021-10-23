import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
};

const idSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		getId: (state, { payload }) => {
			state.id = payload;
		},
	},
});

const { reducer, actions } = idSlice;
export const { getId } = actions;

export default reducer;
