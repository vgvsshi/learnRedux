import React from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage, Product } from '../pages';
import './app.scss';
import {
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<>
			<AppHeader />
			<Switch>
				<div className='Wrapper'>
					<Route path="/:ID" component={Product} />
					<Route exact path="/" component={MainPage} />
					<Route exact path="/cart" component={CartPage} />
				</div>
			</Switch>
		</>
	);
}

export default App;
