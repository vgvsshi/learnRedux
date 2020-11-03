import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addedToCardWithAmount, productLoaded } from '../../actions';
import { useParams, withRouter } from 'react-router-dom';
import './productPage.scss';
import Loader from '../loader';

const ProductPage = ({ productItems, addedToCardWithAmount, match }) => {

	const ItemId = useParams().id
	const item = productItems.find(item => item._id === ItemId);
	const { title, img, category, price, _id } = item;
	const [amount, setAmount] = useState(1);
	const updateInputValue = (event) => {
		console.log(amount)
		setAmount(event.target.value);
		console.log(ItemId)
		console.log(productItems)
	}
	return item ? (
		<div className='productWrapper'>
			<img src={img} alt='alo'></img>
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
				addedToCardWithAmount(_id, 1)
			}}>Добавить в корзину</button>
		</div >
	) : <Loader />
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