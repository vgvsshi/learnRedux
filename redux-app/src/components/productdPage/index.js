import React, { useState, useCallback, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { addedToCardWithAmount, productLoaded } from '../../actions';
import { useParams, withRouter } from 'react-router-dom';
import './productPage.scss';
import Loader from '../loader';
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext';

const ProductPage = ({ productItems, addedToCardWithAmount, match }) => {

	const ItemId = useParams().id
	const [chosenProd, setProd] = useState(null)
	const { request, loading } = useHttp()
	const getProdBiId = useCallback(async () => {
		try {
			const item = await request(`/api/products/${ItemId}`, 'GET', null)
			setProd(item)
		} catch (e) {
			console.log(e)
		}
	}, [request, ItemId])
	useEffect(() => {
		getProdBiId()
	}, [getProdBiId])
	const [amount, setAmount] = useState(1);
	const updateInputValue = (event) => {
		console.log(amount)
		setAmount(event.target.value);
	}
	return !loading && chosenProd ? (
		<div className='productWrapper'>
			<img src={chosenProd.img} alt='alo'></img>
			<div className='prodTitle'>
				{chosenProd.title}
			</div>
			<div className='prodCategory'>
				{chosenProd.category}
			</div>
			<div className='prodPrice'>
				{chosenProd.price}$
			</div>
			<div className='inc' onClick={() => { setAmount(amount + 1) }}>
				+
			</div>
			<input type='' className='input' value={amount} onChange={updateInputValue}></input>
			<div className='inc' onClick={() => { amount === 1 ? setAmount(1) : setAmount(amount - 1) }}>
				-
			</div>
			<button onClick={() => {
				addedToCardWithAmount(chosenProd._id, amount)
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