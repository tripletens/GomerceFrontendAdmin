import React, { useState } from 'react';
import CategoriesLayout from '../../components/categoriesLayout';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';
import { useNavigate } from 'react-router-dom';

const CheckoutAddress = () => {
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
								<FormControl fullWidth>
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
							<FormControl fullWidth>
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
					</div>
					<div className='address-input'>
						<label htmlFor=''>City</label>
						<Box sx={{ maxWidth: '450px', flex: '1 1 0%' }}>
							<FormControl fullWidth>
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
					</div>
				</div>
			</div>
			<button
				onClick={() => navigate('/checkout-delivery')}
				className='payment-form-action'
			>
				SAVE AND CONTINUE
			</button>
		</CategoriesLayout>
	);
};

export default CheckoutAddress;
