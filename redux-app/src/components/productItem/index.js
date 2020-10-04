import React from 'react';
import './productItem.scss'
import { Link } from 'react-router-dom';

const ProductItem = ({ productItem, onAddToCard }) => {
	return (
		<li className='itemWrapper'>
			<Link to={`/${productItem.id}`}>
				<div className='itemTitle'>
					{productItem.title}
				</div>
				<img src={productItem.url} alt="Диван"></img>
				<div className='itemCategory'>
					Категория: {productItem.category}
				</div>
				<div className='itemPrice'>
					Цена: {productItem.price}
				</div>
			</Link>
			<button onClick={() => { onAddToCard() }} >Добавить в корзину</button>
		</li>
	)
}

export default ProductItem;