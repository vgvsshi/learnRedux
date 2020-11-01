import React from 'react';
import AppHeader from '../appHeader';
import { Switch } from "react-router-dom";
import UseRoutes from '../../routes'
import { productLoaded, categoryLoaded } from '../../actions';
import { connect } from 'react-redux';
import './app.scss';
import 'materialize-css'



const App = ({ productLoaded, productItems, categoryItems, categoryLoaded }) => {

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
