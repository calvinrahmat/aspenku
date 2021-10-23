import productReducer from '../api/productDetail';
import searchReducer from '../components/Navbar/SearchBar/searchSlice';
import sortReducer from '../components/Navbar/Sort/sortSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		products: productReducer,
		search: searchReducer,
		sort: sortReducer,
	},
});
