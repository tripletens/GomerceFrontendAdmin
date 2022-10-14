import React, { useState } from 'react';
import CategoriesLayout from '../../components/categoriesLayout';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import AppBarElement from '../../components/appbar';
import './index.css';
import { useNavigate } from 'react-router-dom';
// import styled from '@emotion/styled';

export const CustomSelect = styled(Select)`
	padding: 0 8px;
	${'' /* background: lightBlue */}
	border-radius: 4px;
	width: 100%;
	max-height: 40px;
`;

const CheckoutAddressComponent = () => {
	const [paymentOption, setPaymentOption] = useState('');
	const handleChange = (event) => {
		setPaymentOption(event.target.value);
	};
	let navigate = useNavigate();
	return (
		<CategoriesLayout>
			<div className='address-container'>
				<h5>Address Details</h5>
				<div className='address-form'>
					<div className='address-name-form'>
						<div className='address-input'>
							<label htmlFor=''>First name</label>
							<input type='text' />
						</div>
						<div className='address-input'>
							<label htmlFor=''>Last name</label>
							<input type='text' />
						</div>
					</div>
					<div className='mobile-form'>
						<label htmlFor=''>Mobile number</label>
						<div className='mobile-input'>
							<Box sx={{ maxWidth: '141px', flex: '1 1 0%' }}>
								<CustomSelect
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
							<input type='text' />
						</div>
					</div>
					<div className='address-textarea'>
						<label htmlFor=''>Delivery Address</label>
						<textarea></textarea>
					</div>
					<div className='address-textarea'>
						<label htmlFor=''>Additional info</label>
						<textarea></textarea>
					</div>
					<div className='address-input'>
						<label htmlFor=''>Region/State</label>
						<Box sx={{ maxWidth: '450px', flex: '1 1 0%' }}>
							<CustomSelect
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
					</div>
					<div className='address-input'>
						<label htmlFor=''>City</label>
						<Box sx={{ maxWidth: '450px', flex: '1 1 0%' }}>
							<CustomSelect
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
					</div>
				</div>
			</div>
			<button
				onClick={() => navigate('/checkout-delivery?checkout-address=done')}
				className='payment-form-action'
			>
				SAVE AND CONTINUE
			</button>
		</CategoriesLayout>
	);
};

export const CheckoutAddress = () => {
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
						<CheckoutAddressComponent />
						{/* add your own code here  */}
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default CheckoutAddress;
