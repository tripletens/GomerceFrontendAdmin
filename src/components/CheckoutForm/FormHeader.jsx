import React from 'react';

const FormHeader = () => {
	return (
		<div className='form-header'>
			<div className='form-title'>
				<span className='form-name'>1. Address details</span>
				<div className='continuation'></div>
			</div>
			<div className='form-title'>
				<span className='form-name'>2. Delivery method</span>
				<div className='continuation'></div>
			</div>
			<span className='form-name'>3. Payment method</span>
		</div>
	);
};

export default FormHeader;
