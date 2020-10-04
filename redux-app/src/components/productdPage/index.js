import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addedToCard } from '../../actions';
import { withRouter } from 'react-router-dom';

class ProductPage extends Component {

	render() {
		const { productItems, addedToCard } = this.props;
		const item = productItems.find(item => +item.id === +this.props.match.params.id);
		if (item === undefined) {
			return null;
		}
		const { title, url, category, price, id } = item;
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
					addedToCard(id)
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
	addedToCard
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));