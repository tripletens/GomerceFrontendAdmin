import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import './index.css';
import { useNavigate } from 'react-router-dom';
import CategoriesLayout from '../../components/categoriesLayout';
import { CustomSelect } from '../checkoutAddress';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import AppBarElement from '../../components/appbar';

const CheckoutPaymentComponent = () => {
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
					<Box
						sx={{
							maxWidth: '300px',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{/* <InputLabel id='demo-simple-select-label'>
								Select payment option
							</InputLabel> */}
						<label style={{ marginBottom: 24 }} htmlFor=''>
							Select payment option
						</label>
						<CustomSelect
							sx={{ height: '35px' }}
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
						</CustomSelect>
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

export const CheckoutPayment = () => {
	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}));

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AppBarElement />
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Grid container spacing={2}>
						{/* add your own code here  */}
						<CheckoutPaymentComponent />
						{/* add your own code here  */}
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default CheckoutPayment;
