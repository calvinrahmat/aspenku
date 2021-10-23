import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { priceHigh } from '../helpers/sortFunction';

export const getProduct = createAsyncThunk(
	'product/getProduct',
	async (key, sort) => {
		if (!key) {
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
			data.sort(priceHigh);
			return data;
		} else if (key) {
			const response = await axios.get(
				`https://apis-dev.aspenku.com/api/v1/product?limit=100&skip=0&search=${key}&sort=relevant`,

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
	}
);

const productSlice = createSlice({
	name: 'card',
	initialState: {
		list: [],
		status: null,
	},
	extraReducers: {
		[getProduct.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getProduct.fulfilled]: (state, { payload }) => {
			state.list = payload;
			state.status = 'success';
		},
		[getProduct.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default productSlice.reducer;
