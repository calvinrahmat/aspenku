import React from 'react';
import ProductCards from '../../components/Card/ProductCards';
import NavbarHeader from '../../components/Navbar/NavbarHeader';

import './SearchPage.scoped.css';

const SearchPage = () => {
	return (
		<div>
			<NavbarHeader />
			<h1>Search Result</h1>
			<ProductCards />
		</div>
	);
};

export default SearchPage;
