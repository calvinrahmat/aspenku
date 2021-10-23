import React from 'react';
import './Specification.scoped.css';
import { useEffect } from 'react';
import { getOneProduct } from '../../../api/oneProduct';
import { useDispatch, useSelector } from 'react-redux';

const Specification = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneProduct());
	}, [dispatch]);

	const data = useSelector((state) => state.product.list);

	return (
		<div>
			<div className="wrapper">
				<div className="title">
					<h1>Specifications</h1>
				</div>
				<div className="paragraph">{data.description}</div>
				<div className="title">
					<h1>Description</h1>
				</div>
				<div className="paragraph">{data.short_description}</div>
			</div>
		</div>
	);
};

export default Specification;
