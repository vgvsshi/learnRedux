import React, { Component } from 'react';
import ProductItem from '../productItem';
import './productList.scss';
import '../productItem/productItem.scss'
import { connect } from 'react-redux';
import { productLoaded, addedToCard } from '../../actions';
import Base from '../../services';

class ProductList extends Component {

	serv = new Base();

	componentDidMount() {
		this.serv.getProducts()
			.then(data => { this.props.productLoaded(data); console.log(data) });
	}

	render() {
		const { productItems, addedToCard } = this.props;
		console.log(productItems);
		const items = productItems.map((productItem, index) => {
			return (
				<ProductItem key={index} productItem={productItem} onAddToCard={() => addedToCard(productItem.id)} />
			)
		})

		console.log(items)

		return (
			<View items={items} />
		)
	}
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