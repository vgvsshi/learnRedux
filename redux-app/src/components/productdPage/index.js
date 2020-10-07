import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addedToCardWithAmount, productLoaded } from '../../actions';
import { withRouter } from 'react-router-dom';
import './productPage.scss';

const ProductPage = ({ productItems, addedToCardWithAmount, match }) => {


	const item = productItems.find(item => +item.id === +match.params.id);
	const { title, url, category, price, id } = item;
	const [amount, setAmount] = useState(1);
	const updateInputValue = (event) => {
		console.log(amount)
		setAmount(event.target.value);
	}
	return (
		<div className='productWrapper'>
			<img src={url} alt='alo'></img>
			<div className='prodTitle'>
				{title}
			</div>
			<div className='prodCategory'>
				{category}
			</div>
			<div className='prodPrice'>
				{price}$
			</div>
			<div className='inc' onClick={() => { setAmount(amount + 1) }}>
				+
			</div>
			<input type='' className='input' value={amount} onChange={updateInputValue}></input>
			<div className='inc' onClick={() => { amount === 1 ? setAmount(1) : setAmount(amount - 1) }}>
				-
			</div>
			<button onClick={() => {
				addedToCardWithAmount(id, amount)
			}}>Добавить в корзину</button>
		</div >
	)
}

const mapStateToProps = (state) => {
	return {
		productItems: state.productList
	}
}

const mapDispatchToProps = {
	addedToCardWithAmount,
	productLoaded
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));