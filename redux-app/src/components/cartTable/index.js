import React from 'react';
import './cartTable.scss';
import { connect } from 'react-redux';
import { deleteFromCard, incAmount, decAmount } from '../../actions';
const CartTable = ({ items, deleteFromCard, decAmount, incAmount }) => {
	const byField = (field) => {
		return (a, b) => a[field] > b[field] ? 1 : -1;
	}
	return (
		<>
			<div className='cartWrapper'>
				Ваш заказ:
				<div className='cartList'>
					{
						items.sort(byField('title')).map((item, idx) => {
							const { title, price, img, id, amount } = item;
							return (
								<div key={idx} className="cartItem">
									<img src={img} className="cart__item-img" alt={title}></img>
									<div className="cartitemTitle">{title}</div>
									<div className="cartItemPrice">{price}$</div>
									<div onClick={() => deleteFromCard(id)} className="cartClose">&times;</div>
									<div onClick={() => decAmount(id)} className='dec'>-</div>
									<div className='amount'>{amount}</div>
									<div onClick={() => incAmount(id)} className='inc'>+</div>
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
	deleteFromCard,
	decAmount,
	incAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);