import React from 'react';
import './Store.scoped.css';
import { AiOutlineStar } from 'react-icons/ai';
import { BsChatRight } from 'react-icons/bs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../../api/oneProduct';

const Store = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getOneProduct());
	}, [dispatch]);

	const { SpreeStore } = useSelector((state) => state.product.list);

	return (
		<div>
			<div className="wrapper">
				<div className="photo-box">
					<img
						src={`https://apis-dev.aspenku.com${
							SpreeStore ? SpreeStore.image_banner_file_name : ''
						}`}
						alt=""
					/>
				</div>
				<div className="detail-wrapper">
					<div className="store-detail-wrapper">
						<div className="store-detail">
							<div className="store-name">
								{SpreeStore ? SpreeStore.store_name : ''}
								<div className="star">
									{SpreeStore ? SpreeStore.store_average_rating : ''}
									<AiOutlineStar />
								</div>
							</div>
							<p className="store-status">Store is closed</p>
						</div>
					</div>
					<div className="line" />
					<div className="wrapper-btn">
						<button className="inquiry-btn">Send Inquiry</button>
						<button className="chat-btn">
							<BsChatRight />
							Chat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Store;
