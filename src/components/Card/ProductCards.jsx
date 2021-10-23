import { Card, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ProductCard.scoped.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { motion } from 'framer-motion';
import { getProduct } from '../../api/productDetail.js';

const ProductCards = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProduct());
	}, [dispatch]);
	const { rows } = useSelector((state) => state.products.list);

	const renderCard = (card) => {
		return (
			<Col key={card.id}>
				<motion.div whileHover={{ scale: 1.1 }}>
					<Card className="box">
						<Card.Img
							className="img skeleton"
							variant="top"
							src={`https://apis-dev.aspenku.com${
								card.SpreeProductImages[0]
									? card.SpreeProductImages[0].thumbnail_image
									: ''
							}`}
						/>

						<Card.Body className="cardBody">
							<Card.Title
								className="title"
								style={{
									overflow: 'hidden',

									textOverflow: 'ellipsis',
									fontSize: '18px',
									width: '150px',
									height: '100px',
								}}
							>
								{card.name}
							</Card.Title>
							<Card.Title
								className="price"
								style={{
									fontSize: '1.2rem',
								}}
							>
								<NumberFormat
									value={card.sell_price}
									className="foo"
									displayType={'text'}
									thousandSeparator={true}
									prefix={'$'}
								/>
							</Card.Title>
							<Card.Title className="seller"> {card.seller}</Card.Title>
						</Card.Body>
					</Card>
				</motion.div>
			</Col>
		);
	};

	return (
		<>
			<Container className="products">
				<h1>Recommendations</h1>
				<div className="grid">{rows ? rows.map(renderCard) : ''}</div>
			</Container>
		</>
	);
};

export default ProductCards;
