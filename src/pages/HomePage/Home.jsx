import NavbarHeader from '../../components/Navbar/NavbarHeader';
import ProductCards from '../../components/Card/ProductCards';
import './Home.scoped.css';

import React from 'react';

const Home = () => {
	return (
		<div>
			<NavbarHeader />
			<ProductCards />
		</div>
	);
};

export default Home;
