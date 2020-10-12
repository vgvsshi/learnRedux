import React, { useState } from 'react';
import ProductItem from '../productItem';
import './productList.scss';
import { connect } from 'react-redux';
import { addedToCard } from '../../actions';

const ProductList = ({ productItems, addedToCard, categoryItems }) => {

	const [chosenCategory, changeCategory] = useState('Все');
	const [chosenPrice, changePrice] = useState();

	function filterByCategory(array) {
		if (chosenCategory === 'Все') {
			return array;
		} else {
			return array.filter(item => item.category === chosenCategory);
		}
	}
	function filterByPrice(array) {
		if (array.filter(item => item.price === chosenPrice)) {
			return array.filter(item => item.price === chosenPrice)
		} else {
			return array;
		}
	}

	const byField = (field) => {
		return (a, b) => a[field] > b[field] ? 1 : -1;
	}


	let items = filterByCategory(productItems).sort(byField('title')).map((productItem, index) => {
		return (
			<ProductItem key={index} productItem={productItem} onAddToCard={() => addedToCard(productItem.id)} />
		)
	})

	const categorys = categoryItems.map((category, id) => {
		return (
			<li onClick={() => { changeCategory(category) }} key={id} className={chosenCategory === category ? 'categoryItem active' : 'categoryItem'}>
				{category}
			</li>
		)
	})
	return (
		<div className='listwrap'>
			<ul className='categoryList'>
				<li onClick={() => { changeCategory('Все') }} className={chosenCategory === 'Все' ? 'categoryItem active' : 'categoryItem'}>Все</li>
				{categorys}
			</ul>
			<View items={items} />
		</div >
	)
}
const mapStateToProps = (state) => {
	return {
		productItems: state.productList,
		categoryItems: state.categoryList
	}
}

const mapDispatchToProps = {
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