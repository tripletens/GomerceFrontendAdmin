import React from 'react';

const SHIPPINGDETAILS = [
	{
		id: 1,
		order: 'Laptop Bag USB Back Pack Antitheft Bag',
		quantity: 1,
		deliveredBy: '',
	},
	{
		id: 2,
		order: 'Laptop Bag USB Back Pack Antitheft Bag',
		quantity: 1,
		deliveredBy: '',
	},
];

const ShippingSummary = () => {
	return (
		<div className='shipping-summary'>
			<h5>Shipping items</h5>
			<div className='divider'></div>
			{SHIPPINGDETAILS.map((item) => (
				<div key={item.id} className='shipping-details'>
					<p>
						Shipment {item.id} of {SHIPPINGDETAILS.length}
					</p>
					<p>{item.order}</p>
					<p>Qty - {item.quantity}</p>
					<p>Delivered by ---- {item.deliveredBy}</p>
				</div>
			))}
		</div>
	);
};

export default ShippingSummary;
