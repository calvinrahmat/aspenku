import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { priceHigh } from '../helpers/sortFunction';

export const getOneProduct = createAsyncThunk(
	'product/getOneProduct',
	async (name) => {
		const response = await axios.get(
			`https://apis-dev.aspenku.com/api/v1/product/${name}`,

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

const oneProductSlice = createSlice({
	name: 'product',
	initialState: {
		list: [],
		status: null,
	},
	extraReducers: {
		[getOneProduct.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getOneProduct.fulfilled]: (state, { payload }) => {
			state.list = payload;
			state.status = 'success';
		},
		[getOneProduct.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default oneProductSlice.reducer;
