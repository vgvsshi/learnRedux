import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addedToCard, productLoaded } from '../../actions';
import { withRouter } from 'react-router-dom';
import './productPage.scss';

const ProductPage = ({ productItems, addedToCard, match }) => {


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
			<div className='inc'>
				+
			</div>
			<input type='text' className='input' value={amount} onChange={updateInputValue}></input>
			<div className='inc'>
				-
			</div>
			<button onClick={() => {
				addedToCard(id)
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
	addedToCard,
	productLoaded
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));