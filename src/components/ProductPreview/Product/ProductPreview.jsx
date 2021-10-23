import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../api/productDetail';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import './ProductPreview.scoped.css';
import QtyButton from './QtyButton/QtyButton';
import { Container } from 'react-bootstrap';

const ProductPreview = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct());
	});

	const { rows } = useSelector((state) => state.products.list);

	return (
		<div>
			<div className="wrapper">
				<div className="photo-box">
					<img
						src="https://apis-dev.aspenku.com/product/thumbnail/1630985443XM.jpg"
						alt=""
					/>
				</div>
				<div className="detail-product">
					<h1>Syngonium White Splash</h1>
					<div className="stars">
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
					<div className="price">$ 120.00 / unit</div>
					<div className="qty">
						<QtyButton />
					</div>
					<div className="spec">
						<ul>
							<li>Minimum order</li>
							<li>Products in Stock</li>
							<li>Sold Product</li>
							<li>Product Weight</li>
						</ul>
					</div>
					<div className="buttons">
						<button className="cart-btn"> ADD TO CART</button>

						<button className="buy-btn">
							<AiOutlineShopping />
							BUY
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreview;
