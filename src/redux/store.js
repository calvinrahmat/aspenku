import productReducer from '../api/productDetail';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		products: productReducer,
	},
});
