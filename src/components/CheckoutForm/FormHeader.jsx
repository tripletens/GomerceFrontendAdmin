import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
					<Link to={'/checkout-address'}>Address details</Link>
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
					<Link to={'/checkout-delivery'}>Delivery Method</Link>
				</div>
				<div className='continuation'></div>
			</div>
			<div className='form-name'>
				<span>3.</span>
				<Link to={'/checkout-payment'}>Payment Method</Link>
			</div>
		</div>
	);
};

export default FormHeader;
