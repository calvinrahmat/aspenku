import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineShopping, AiOutlineShareAlt } from 'react-icons/ai';
import './ProductPreview.scoped.css';
import QtyButton from './QtyButton/QtyButton';
import { Container } from 'react-bootstrap';
import { getOneProduct } from '../../../api/oneProduct';
import { useLocation } from 'react-router';
import { useParams } from 'react-router';
import ReactImageMagnify from 'react-image-magnify';
import useClipboard from 'react-use-clipboard';

const ProductPreview = () => {
	let { name } = useParams();

	const [isCopied, setCopied] = useClipboard(window.location.href);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneProduct(name));
	}, [dispatch, name]);
	useEffect(() => {
		if (isCopied) {
			alert('link berhasil disalin');
		}
	}, [isCopied]);

	const data = useSelector((state) => state.product.list);

	return (
		<div>
			<div className="wrapper">
				<div className="photo-box">
					<ReactImageMagnify
						{...{
							smallImage: {
								alt: 'Wristwatch by Ted Baker London',
								isFluidWidth: true,
								src: `https://apis-dev.aspenku.com${
									data.SpreeProductImages
										? data.SpreeProductImages[0].thumbnail_image
										: ''
								}`,
							},
							largeImage: {
								src: `https://apis-dev.aspenku.com${
									data.SpreeProductImages
										? data.SpreeProductImages[0].thumbnail_image
										: ''
								}`,
								width: 1200,
								height: 1800,
							},
						}}
					/>

					<button className="share-btn" onClick={setCopied}>
						<AiOutlineShareAlt /> Share
					</button>
				</div>
				<div className="detail-product">
					<h1>{data.name}</h1>
					<div className="stars">
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
						<AiOutlineStar />
					</div>
					<div className="price">$ {data.sell_price} / unit</div>
					<div className="qty">
						<QtyButton min_qty_order={data.min_qty_order} />
					</div>
					<div className="spec">
						<ul>
							<li>Minimum order : {data.min_qty_order}</li>
							<li>Products in Stock : {data.stock_on_hand}</li>
							<li>Sold Product : {data.sold}</li>
							<li>Product Weight : {data.weight} </li>
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
