import React from 'react';
import './productItem.scss'

const ProductItem = (menuItem) => {
	return (
		<>
			<div className='itemWrapper'>
				<div className='itemTitle'>
					{menuItem.title}
				</div>
				<img src={menuItem.url} alt="Диван"></img>
				<div className='itemCategory'>
					Категория: {menuItem.category}
				</div>
				<div className='itemPrice'>
					Цена: {menuItem.price}
				</div>
				<a href='/'>Добавить в корзину</a>
			</div>
		</>
	)
}

export default ProductItem;