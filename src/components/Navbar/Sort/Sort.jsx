import React from 'react';

import './Sort.scoped.css';
import { Dropdown } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { sortSuccess } from './sortSlice';

const Sort = () => {
	const dispatch = useDispatch();
	const priceLowToHigh = () => {
		dispatch(sortSuccess('priceLowToHigh'));
	};
	const priceHighToLow = () => {
		dispatch(sortSuccess('priceHighToLow'));
	};

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="none" style={{ background: 'white' }}>
					Sort
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item onClick={priceLowToHigh}>
						Harga: rendah ke tinggi
					</Dropdown.Item>
					<Dropdown.Item onClick={priceHighToLow}>
						Harga: tinggi ke rendah
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Sort;
