import React from 'react';
import ProductItem from '../productItem';
import './productList.scss';
import { connect } from 'react-redux';
import { productLoaded } from '../../actions';



const ProductList = () => {
	return (
		<div className='productList'>
			<ProductItem />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		productItems: state.productList
	}
}

const mapDispatchToProps = {
	productLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);