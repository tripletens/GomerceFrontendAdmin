import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';
import { useNavigate } from 'react-router-dom';
import CategoriesLayout from '../../components/categoriesLayout';

const CheckoutPayment = () => {
	const [paymentOption, setPaymentOption] = useState('');
	const handleChange = (event) => {
		setPaymentOption(event.target.value);
	};
	let navigate = useNavigate();
	return (
		<CategoriesLayout>
			<div className='payment-container'>
				<h5>How do you want to pay for your payment?</h5>

				<div className='payment-form'>
					<Box sx={{ maxWidth: '300px' }}>
						<FormControl fullWidth>
							{/* <InputLabel id='demo-simple-select-label'>
								Select payment option
							</InputLabel> */}
							<label style={{ marginBottom: 24 }} htmlFor=''>
								Select payment option
							</label>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={paymentOption}
								onChange={handleChange}
								placeholder='open this select'
								defaultValue='open this select'
							>
								<MenuItem disabled value={'open this select'}>
									open this select
								</MenuItem>
								<MenuItem value={'cash'}>Cash</MenuItem>
								<MenuItem value={'card'}>Card</MenuItem>
							</Select>
						</FormControl>
					</Box>
					<div>
						<label htmlFor=''>Do you have a voucher?</label>
						<div className='input-container'>
							<input type='text' className='input-form' />{' '}
							<button className='voucher-btn'>add voucher</button>
						</div>
					</div>
				</div>
				<div className='payment-pricing'>
					<div className='payment-breakdown'>
						<p>Subtotal</p>
						<p>$$$$$$</p>
					</div>
					<div className='payment-breakdown'>
						<p>VAT</p>
						<p>$$$$$$</p>
					</div>
					<div className='payment-breakdown'>
						<p>Local delivery fees</p>
						<p>$$$$$$</p>
					</div>
					<div className='payment-breakdown'>
						<p>Free Shipping Discount</p>
						<p>$$$$$$</p>
					</div>
					<div className='payment-divider'></div>
				</div>
				<div className='payment-summary'>
					<div className='payment-breakdown'>
						<p>Total</p>
						<p>$$$$$$</p>
					</div>
				</div>
			</div>
			<button onClick={() => navigate('/')} className='payment-form-action'>
				SUBMIT ORDERS
			</button>
		</CategoriesLayout>
	);
};

export default CheckoutPayment;
