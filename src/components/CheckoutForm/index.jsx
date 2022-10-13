import React from 'react';
import './index.css';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

const CheckoutForm = () => {
	const StyledFormControlLabel = styled((props) => (
		<FormControlLabel {...props} />
	))(({ theme, checked }) => ({
		'.MuiFormControlLabel-label': checked
			? {
					color: '#1F2839',
			  }
			: {
					color: '#DADADA',
			  },
	}));

	function MyFormControlLabel(props) {
		// MUI UseRadio Group
		const radioGroup = useRadioGroup();

		let checked = false;

		if (radioGroup) {
			checked = radioGroup.value === props.value;
		}

		return <StyledFormControlLabel checked={checked} {...props} />;
	}
	return (
		<>
			<FormControl className='form-container'>
				<FormLabel
					sx={{ fontWeight: 400, color: '#1f2839' }}
					id='demo-radio-buttons-group-label'
				>
					How do you want your order delivered?
				</FormLabel>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='Pickup station'
					name='radio-buttons-group'
				>
					<div className='pickup-station-form'>
						<MyFormControlLabel
							value='Pickup station'
							sx={{ py: '20px', pl: '10px' }}
							control={
								<Radio
									sx={{
										color: '#DADADA',
										'&.Mui-checked': {
											color: '#1F2839',
										},
									}}
								/>
							}
							label='Pickup station'
						/>
						<h6>
							Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with
							cheaper shipping fees
						</h6>
						<button className='pickup-action'>select pickup station</button>
					</div>
					<div>
						<MyFormControlLabel
							value='Deliver to your home or office'
							sx={{ py: '20px', pl: '10px' }}
							control={
								<Radio
									sx={{
										color: '#DADADA',
										'&.Mui-checked': {
											color: '#1F2839',
										},
									}}
								/>
							}
							label='Deliver to your home or office'
						/>
						<h6 style={{ marginBottom: 20 }}>
							Delivered between Tuesday 20 Sep and Thursday 22 Sep
						</h6>
					</div>
				</RadioGroup>
			</FormControl>
		</>
	);
};

export default CheckoutForm;
