import React from 'react';
import './Navbar.scoped.css';
import SearchBar from './SearchBar/SearchBar';
import logo from '../../asset/images/aspenku.jpg';
import Sort from './Sort/Sort';

const NavbarHeader = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="brand">
					<img src={logo} alt="logo" className="logo" />
					Aspenku
				</div>
				<div className="search-bar">
					<SearchBar />
				</div>
				<div className="sort-btn">
					<Sort />
				</div>
			</div>
		</div>
	);
};

export default NavbarHeader;
