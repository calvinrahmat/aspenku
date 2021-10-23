import React from 'react';
import './Store.scoped.css';
import { AiOutlineStar } from 'react-icons/ai';
import { BsChatRight } from 'react-icons/bs';

const Store = () => {
	return (
		<div>
			<div className="wrapper">
				<div className="photo-box">
					<img src="https://apis.aspenku.com/store/1634886650UB.jpg" alt="" />
				</div>
				<div className="detail-wrapper">
					<div className="store-detail-wrapper">
						<div className="store-detail">
							<div className="store-name">
								CV Rehat Nusantara
								<div className="star">
									0.0 <AiOutlineStar />
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
