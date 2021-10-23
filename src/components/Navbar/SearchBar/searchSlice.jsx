import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	key: '',
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		searchSuccess: (state, { payload }) => {
			state.key = payload;
		},
	},
});

const { reducer, actions } = searchSlice;
export const { searchSuccess } = actions;

export default reducer;
