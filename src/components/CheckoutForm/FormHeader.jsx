import React from 'react';
import { useParams } from 'react-router-dom';
import check from '../../assets/Checkmark.svg';

const FormHeader = () => {
	let { done } = useParams();
	return (
		<div className='form-header'>
			<div className='form-title'>
				<span className='form-name'>
					{done === 'true' ? <img src={check} alt='' /> : 1} Address details
				</span>
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
