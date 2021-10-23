import React from 'react';
import './QtyButton.scoped.css';
import { useState } from 'react';

const QtyButton = ({ min_qty_order }) => {
	const [count, setCount] = useState(1);
	const addQty = () => {
		setCount((prevCount) => prevCount + 1);
	};
	const reduceQty = () => {
		if (count > min_qty_order) setCount((prevCount) => prevCount - 1);
	};
	return (
		<div>
			<div className="qty-wrapper">
				Qty
				<div className="btn-wrapper">
					<button className="min-btn-box" onClick={reduceQty}>
						-
					</button>
					<div className="number">{count}</div>
					<button className="plus-btn-box" onClick={addQty}>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default QtyButton;
