import React from 'react';

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
			<DropdownButton id="dropdown" className="dropdown" title="Sort">
				<Dropdown.Item onClick={priceLowToHigh}>
					Price Low To High
				</Dropdown.Item>
				<Dropdown.Item onClick={priceHighToLow} href="#/action-1">
					Price High To Low
				</Dropdown.Item>
			</DropdownButton>
		</div>
	);
};

export default Sort;
