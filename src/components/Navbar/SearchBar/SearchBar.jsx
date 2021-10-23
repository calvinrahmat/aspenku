import React from 'react';
import './SearchBar.scoped.css';
import SearchButton from './SearchButton/SearchButton';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchSuccess } from './searchSlice';

const SearchBar = () => {
	const [key, setKey] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(searchSuccess(key));
	};
	return (
		<div>
			<div className="wrapper">
				<form onSubmit={onSubmit}>
					<div className="search-container">
						<input
							type="text"
							placeholder="What are you looking for?"
							className="search-box"
							value={key}
							onChange={(e) => setKey(e.target.value)}
						/>

						<button type="submit" className="search-btn">
							<SearchButton />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
