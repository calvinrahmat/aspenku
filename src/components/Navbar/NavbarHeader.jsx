import React from 'react';
import './Navbar.scoped.css';
import SearchBar from './SearchBar/SearchBar';
import logo from '../../asset/images/aspenku.jpg';
import Sort from './Sort/Sort';
import { Link } from 'react-router-dom';

const NavbarHeader = () => {
	return (
		<div>
			<div className="wrapper">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<div className="brand">
						<img src={logo} alt="logo" className="logo" />
						Aspenku
					</div>
				</Link>
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
