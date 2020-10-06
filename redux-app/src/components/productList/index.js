import React, { useState } from 'react';
import ProductItem from '../productItem';
import './productList.scss';
import { connect } from 'react-redux';
import { addedToCard } from '../../actions';

const ProductList = ({ productItems, addedToCard, categoryItems }) => {

	const [chosenCategory, changeCategory] = useState('стулья');

	const items = productItems.filter(item => item.category === chosenCategory).map((productItem, index) => {
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