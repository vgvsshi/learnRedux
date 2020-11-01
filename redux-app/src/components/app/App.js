import React, { useEffect } from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import ProductPage from '../productdPage';
import AuthPage from '../auth/authpage'
import { Switch, Route, Router, } from "react-router-dom";
import UseRoutes from '../../routes'
import Base from '../../services';
import { productLoaded, categoryLoaded } from '../../actions';
import { connect } from 'react-redux';
import './app.scss';
import 'materialize-css'



const App = ({ productLoaded, productItems, categoryItems, categoryLoaded }) => {

	const serv = new Base();

	useEffect(() => {
		serv.getProducts()
			.then(data => productLoaded(data));
		serv.getCategoryList()
			.then(data => categoryLoaded(data));
	}, []);

	const router = UseRoutes(false)

	return (
		<>
			<Switch>
				<>
					<AppHeader />
					<div className='Wrapper'>
						{router}
					</div>
				</>
			</Switch>
		</>
	)
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
