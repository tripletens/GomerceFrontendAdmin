import React from 'react';
import './index.css';
const SUMMARYDETAILS = [
	{
		img: './images/order-item.png',
		orderTitle: 'SMART 6, 6.6", (2GB RAM + 32GB ROM), 5000MAH, 3G - BLACK',
		price: '$$$$',
		quantity: 1,
	},
	{
		img: './images/order-item.png',
		orderTitle: 'SMART 6, 6.6", (2GB RAM + 32GB ROM), 5000MAH, 3G - BLACK',
		price: '$$$$',
		quantity: 1,
	},
];

const OrderSummary = () => {
	return (
		<div className='summary'>
			<h3>Order summary</h3>
			<div className='summary-container'>
				<h5 className='summary-header'>Your Order (2 items)</h5>
				{SUMMARYDETAILS.map((item) => (
					<div className='order-item'>
						<img
							src={item.img}
							alt=''
							width={80}
							height={80}
							className='order-img'
						/>
						<div className='order-details'>
							<h6 style={{ maxWidth: '326px' }}>{item.orderTitle}</h6>
							<h6>{item.price}</h6>
							<h6>Qty: {item.quantity}</h6>
						</div>
					</div>
				))}
				<div className='order-pricing'>
					<div className='order-breakdown'>
						<p>Subtotal</p>
						<p>$$$$$$</p>
					</div>
					<div className='order-breakdown'>
						<p>VAT</p>
						<p>$$$$$$</p>
					</div>
					<div className='order-breakdown'>
						<p>Total</p>
						<p>$$$$$$</p>
					</div>
				</div>
				<button className='summary-action'>modify cart</button>
			</div>
			<h3 style={{ marginTop: '20px', marginBottom: 10 }}>need help?</h3>
			<div className='order-support'>
				<h6>Contact an expert to support you</h6>
				<button className='summary-action'>reach out</button>
			</div>
		</div>
	);
};

export default OrderSummary;
