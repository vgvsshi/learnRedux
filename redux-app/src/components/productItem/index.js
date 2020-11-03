import React from 'react';
import './productItem.scss'
import { Link } from 'react-router-dom';

const ProductItem = ({ productItem, onAddToCard }) => {
	return (
		<div class="row">
			<div class="col s12 m7">
				<div class="card">
					<Link to={`/product/${productItem._id}`}>
						<div class="card-image">
							<img src={productItem.img} />
							<span class="card-title">{productItem.title}</span>
						</div>
						<div class="card-content">
							<p>Категория: {productItem.category}.</p>
						</div>
						<div class="card-action">
							<span>Цена: {productItem.price}$</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductItem;