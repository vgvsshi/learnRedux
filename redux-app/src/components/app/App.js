import React from 'react';
import AppHeader from '../appHeader';
import { MainPage, CartPage } from '../pages';
import './app.scss';

function App() {
	return (
		<>
			<AppHeader />
			<div className='Wrapper'>
				<MainPage />
				<CartPage />
			</div>
		</>
	);
}

export default App;
