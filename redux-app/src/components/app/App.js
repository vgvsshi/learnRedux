import React, { Component } from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import ProductPage from '../productdPage';
import './app.scss';
import {
	Switch,
	Route,
} from "react-router-dom";
import Base from '../../services';
import { productLoaded } from '../../actions';
import { connect } from 'react-redux';


class App extends Component {

	serv = new Base();

	componentDidMount() {
		this.serv.getProducts()
			.then(data => { this.props.productLoaded(data); });
	}
	render() {
		return (
			<>
				<AppHeader />
				<Switch>
					<div className='Wrapper'>
						<Route path="/:id" component={ProductPage} />
						<Route exact path="/" component={MainPage} />
						<Route exact path="/cart" component={CartPage} />
					</div>
				</Switch>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		productItems: state.productList
	}
}
const mapDispatchToProps = {
	productLoaded: productLoaded,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
