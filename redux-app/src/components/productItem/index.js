import React from 'react';
import './productItem.scss'

const ProductItem = ({ productItem, onAddToCard }) => {
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
			<button onClick={() => { onAddToCard() }} >Добавить в корзину</button>
		</li>
	)
}

export default ProductItem;