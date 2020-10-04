import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productLoaded, addedToCard } from '../../actions';
import Base from '../../services';

class ProductPage extends Component {

	serv = new Base();

	componentDidMount() {
		this.serv.getProducts()
			.then(data => {
				this.props.productLoaded(data)
			});
	}


	render() {
		const { productItems, addedToCard } = this.props;
		const item = productItems.find(item => +item.id === +this.props.productId)
		const { title, url, category, price } = item;
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
					{price}
				</div>
				<button onClick={() => {
					addedToCard(item.id)
				}}>Добавить в корзину</button>
			</div >
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);