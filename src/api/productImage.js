import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductImage = createAsyncThunk(
	'product/getProductImage',
	async () => {
		const response = await axios.get(
			`https://apis-dev.aspenku.com/api/v1/product?limit=100&skip=0&price={"min":"1","max":"1000"}`,

			{
				headers: {
					authorization: 'Basic QXNwZW5rdTpBc3Blbmt1',
				},
			}
		);
		const { data } = await response.data;
		if (response.ok) {
			throw new Error('error');
		}
		return data;
	}
);

const productImageSlice = createSlice({
	name: 'card',
	initialState: {
		list: [],
		status: null,
	},
	extraReducers: {
		[getProductImage.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getProductImage.fulfilled]: (state, { payload }) => {
			state.list = payload;
			state.status = 'success';
		},
		[getProductImage.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default productImageSlice.reducer;
