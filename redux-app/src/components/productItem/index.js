import React from 'react';
import './productItem.scss'
import { Link } from 'react-router-dom';

const ProductItem = ({ productItem, onAddToCard }) => {
	return (
		<div className='itemWrapper'>
			<Link to={`/product/${productItem._id}`}>
				<div className='itemTitle'>
					{productItem.title}
				</div>
				<img src={productItem.img} alt="Диван"></img>
				<div className='itemCategory'>
					Категория: {productItem.category}
				</div>
				<div className='itemPrice'>
					Цена: {productItem.price}
				</div>
			</Link>
			<button className='btn' onClick={() => { onAddToCard() }} >Добавить в корзину</button>
		</div>
	)
}

export default ProductItem;