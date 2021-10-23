import React from 'react';
import './SearchBar.scoped.css';
import SearchButton from './SearchButton/SearchButton';

const SearchBar = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="search-container">
					<form action="">
						<input
							type="text"
							placeholder="What are you looking for?"
							className="search-box"
						/>
					</form>
					<SearchButton />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
