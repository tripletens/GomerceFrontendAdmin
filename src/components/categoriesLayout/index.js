import React from 'react';
import FormHeader from '../CheckoutForm/FormHeader';
import OrderSummary from '../orderSummary';

const CategoriesLayout = ({ children }) => {
	return (
		<div className='container'>
			<div className='main'>
				<div className='checkout-form'>
					<h3>Checkout</h3>
					<FormHeader />
					<div className='checkout-form-container'>
						<>{children}</>
					</div>
				</div>
				<OrderSummary />
			</div>
		</div>
	);
};

export default CategoriesLayout;
