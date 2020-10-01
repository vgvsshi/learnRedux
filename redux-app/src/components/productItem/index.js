import React from 'react';
import './productItem.scss'

const ProductItem = ({ productItem }) => {
	return (
		<li className='itemWrapper'>
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
			<a href='/'>Добавить в корзину</a>
		</li>
	)
}

export default ProductItem;