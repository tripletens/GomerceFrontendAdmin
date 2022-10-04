// welcome to admin dashboard Categories page
import CheckoutForm from '../../components/CheckoutForm';
import './index.css';
import ShippingSummary from '../../components/CheckoutForm/ShippingSummary';
import CategoriesLayout from '../../components/categoriesLayout';
import { useNavigate } from 'react-router-dom';

const CheckoutDelivery = () => {
	let navigate = useNavigate();
	return (
		<CategoriesLayout>
			<CheckoutForm />
			<ShippingSummary />

			<button
				onClick={() => navigate('/checkout-payment')}
				className='form-action'
			>
				SAVE AND CONTINUE
			</button>
		</CategoriesLayout>
	);
};

export default CheckoutDelivery;
