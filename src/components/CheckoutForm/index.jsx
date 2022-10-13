import React from 'react';
import './index.css';

const CheckoutForm = () => {
	return (
		<>
			<div className='form-container'>
				<h5 style={{ fontWeight: 400 }}>
					How do you want your order delivered?
				</h5>
				<div className='pickup-station-form'>
					<div className='pickup-radio'>
						<input type='radio' name='' id='' />
						<p>Pickup station</p>
					</div>
					<h6>
						Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep with
						cheaper shipping fees
					</h6>
					<button className='pickup-action'>select pickup station</button>
				</div>
				<div>
					<div className='delivery-radio'>
						<input type='radio' name='' id='' />
						<p>Deliver to your home or office</p>
					</div>
					<h6>Delivered between Tuesday 20 Sep and Thursday 22 Sep</h6>
				</div>
			</div>
		</>
	);
};

export default CheckoutForm;
