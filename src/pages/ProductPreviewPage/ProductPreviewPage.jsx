import React from 'react';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import ProductPreview from '../../components/ProductPreview/Product/ProductPreview';
import Specification from '../../components/ProductPreview/Specification/Specification';
import Store from '../../components/ProductPreview/Store/Store';
import './ProductPreviewPage.scoped.css';

const ProductPreviewPage = () => {
	return (
		<div>
			<NavbarHeader />
			<div className="wrapper">
				<div className="top">
					<div className="product-preview">
						<ProductPreview />
					</div>
					<div className="store">
						<Store />
					</div>
				</div>
				<div className="bottom">
					<Specification />
				</div>
			</div>
		</div>
	);
};

export default ProductPreviewPage;
