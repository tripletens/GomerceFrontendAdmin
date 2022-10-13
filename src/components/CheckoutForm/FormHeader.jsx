import React from 'react';
import { useSearchParams } from 'react-router-dom';
import check from '../../assets/Checkmark.svg';

const FormHeader = () => {
	let [searchParams, setSearchParams] = useSearchParams();
	return (
		<div className='form-header'>
			<div className='form-title'>
				<div className='form-name'>
					{searchParams.get('checkout-address') ||
					searchParams.get('checkout-delivery') === 'done' ? (
						<img src={check} alt='' />
					) : (
						<span>1.</span>
					)}{' '}
					<span>Address details</span>
				</div>
				<div className='continuation'></div>
			</div>
			<div className='form-title'>
				<div className='form-name'>
					{searchParams.get('checkout-delivery') === 'done' ? (
						<img src={check} alt='' />
					) : (
						<span>2.</span>
					)}{' '}
					<span>Delivery Method</span>
				</div>
				<div className='continuation'></div>
			</div>
			<div className='form-name'>
				<span>3.</span>
				<span>Payment Method</span>
			</div>
		</div>
	);
};

export default FormHeader;
