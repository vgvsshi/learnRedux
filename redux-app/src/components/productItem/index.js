import React from 'react';
import './productItem.scss'
import { Link } from 'react-router-dom';

const ProductItem = ({ productItem, onAddToCard }) => {
	return (
		<div className="row">
			<div className="col s12 m7">
				<div className="card">
					<Link to={`/product/${productItem._id}`}>
						<div className="card-image">
							<img src={productItem.img} />
							<span className="card-title">{productItem.title}</span>
						</div>
					</Link>
					<div className="card-content">
						<p>Категория: {productItem.category}.</p>
					</div>
					<div className="card-action">
						<span>Цена: {productItem.price}$</span>
					</div>
					<button className='btn' onClick={onAddToCard}>В корзину</button>
				</div>
			</div>
		</div>
	)
}

export default ProductItem;