import React, { useEffect } from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import ProductPage from '../productdPage';
import './app.scss';
import {
	Switch,
	Route,
} from "react-router-dom";
import Base from '../../services';
import { productLoaded, categoryLoaded } from '../../actions';
import { connect } from 'react-redux';


const App = ({ productLoaded, productItems, categoryItems, categoryLoaded }) => {

	const serv = new Base();

	useEffect(() => {
		serv.getProducts()
			.then(data => productLoaded(data));
		serv.getCategoryList()
			.then(data => categoryLoaded(data));
	}, [])
	return productItems.length > 0 && categoryItems.length > 0 ? (
		<>
			<AppHeader />
			<Switch>
				<>
					<div className='Wrapper'>
						<Route exact path="/cart" component={CartPage} />
						<Route path="/product/:id" component={ProductPage} />
						<Route exact path="/" component={MainPage} />
					</div>
				</>
			</Switch>
		</>
	) :
		(null)
}
const mapStateToProps = (state) => {
	return {
		productItems: state.productList,
		categoryItems: state.categoryList
	}
}
const mapDispatchToProps = {
	productLoaded,
	categoryLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
