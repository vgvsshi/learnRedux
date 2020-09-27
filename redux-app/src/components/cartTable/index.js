import React from 'react';
import './cartTable.scss';
const CartTable = () => {
	return (
		<>
			<div className='cartWrapper'>
				Ваш заказ:
				<div className='cartList'>
					<div className="cartItem">
						<img src='https://cs8.pikabu.ru/post_img/big/2016/05/30/8/1464611066146922430.jpg' className="cart__item-img" alt='Чертовской диван'></img>
						<div className="cartitemTitle">Чертовской диван</div>
						<div className="cartItemPrice">20$</div>
						<div className="cartClose">&times;</div>
					</div>
					<div className="cartItem">
						<img src='https://cs8.pikabu.ru/post_img/big/2016/05/30/8/1464611066146922430.jpg' className="cart__item-img" alt='Чертовской диван'></img>
						<div className="cartitemTitle">Чертовской диван</div>
						<div className="cartItemPrice">20$</div>
						<div className="cartClose">&times;</div>
					</div>
					<div className="cartItem">
						<img src='https://cs8.pikabu.ru/post_img/big/2016/05/30/8/1464611066146922430.jpg' className="cart__item-img" alt='Чертовской диван'></img>
						<div className="cartitemTitle">Чертовской диван</div>
						<div className="cartItemPrice">20$</div>
						<div className="cartClose">&times;</div>
					</div>
					<div className="cartItem">
						<img src='https://cs8.pikabu.ru/post_img/big/2016/05/30/8/1464611066146922430.jpg' className="cart__item-img" alt='Чертовской диван'></img>
						<div className="cartitemTitle">Чертовской диван</div>
						<div className="cartItemPrice">20$</div>
						<div className="cartClose">&times;</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartTable