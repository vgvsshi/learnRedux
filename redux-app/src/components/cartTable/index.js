import React from 'react';
import './cartTable.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions';
const CartTable = ({ items, deleteFromCard, counter }) => {
	return (
		<>
			<div className='cartWrapper'>
				Ваш заказ:
				<div className='cartList'>
					{
						items.map(item => {
							const { title, price, url, id, amount } = item;
							return (
								<div key={id} className="cartItem">
									<img src={url} className="cart__item-img" alt={title}></img>
									<div className="cartitemTitle">{title}</div>
									<div className="cartItemPrice">{price}$</div>
									<div onClick={() => deleteFromCard(id)} className="cartClose">&times;</div>
									<div className='amount'>{amount}</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

const mapStateToProps = ({ items }) => {
	return {
		items
	}
};

const mapDispatchToProps = {
	deleteFromCard
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);