import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './SearchButton.scoped.css';
import { motion } from 'framer-motion';

const SearchButton = () => {
	return (
		<motion.div whileHover={{ scale: 1.1 }}>
			<FiSearch className="search-icon" />
		</motion.div>
	);
};

export default SearchButton;
