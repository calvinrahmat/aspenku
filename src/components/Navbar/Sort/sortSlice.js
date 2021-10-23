import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sort: '',
};

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		sortSuccess: (state, { payload }) => {
			state.sort = payload;
		},
	},
});

const { reducer, actions } = sortSlice;
export const { sortSuccess } = actions;

export default reducer;
