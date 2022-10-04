import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Vendors from './pages/vendors';
import CheckoutDelivery from './pages/checkoutDelivery';
import { Orders } from './pages/orders';
import CheckoutPayment from './pages/checkoutPayment';
import CheckoutAddress from './pages/checkoutAddress';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/vendors' element={<Vendors />} />
			<Route path='/checkout-delivery' element={<CheckoutDelivery />} />
			<Route path='/checkout-payment' element={<CheckoutPayment />} />
			<Route path='/checkout-address' element={<CheckoutAddress />} />
			<Route path='/orders' element={<Orders />} />
		</Routes>
	);
};

export default App;
