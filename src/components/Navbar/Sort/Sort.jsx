import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './Sort.scoped.css';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
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
					<Dropdown.Item onClick={priceLowToHigh}>
						Price Low To High
					</Dropdown.Item>
					<Dropdown.Item onClick={priceHighToLow}>
						Price High To Low
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Sort;
