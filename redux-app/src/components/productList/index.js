import React from 'react';
import ProductItem from '../productItem';
import './productList.scss';
import { connect } from 'react-redux';
import { productLoaded, addedToCard } from '../../actions';

const ProductList = ({ productItems, addedToCard }) => {

	const items = productItems.map((productItem, index) => {
		return (
			<ProductItem key={index} productItem={productItem} onAddToCard={() => addedToCard(productItem.id)} />
		)
	})
	return (
		<View items={items} />
	)
}
const mapStateToProps = (state) => {
	return {
		productItems: state.productList
	}
}

const mapDispatchToProps = {
	productLoaded: productLoaded,
	addedToCard
}

const View = ({ items }) => {

	return (
		<ul className="productList">
			{items}
		</ul>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);