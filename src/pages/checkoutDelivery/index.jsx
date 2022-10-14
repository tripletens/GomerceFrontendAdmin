// welcome to admin dashboard Categories page
import CheckoutForm from '../../components/CheckoutForm';
import './index.css';
import ShippingSummary from '../../components/CheckoutForm/ShippingSummary';
import CategoriesLayout from '../../components/categoriesLayout';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import AppBarElement from '../../components/appbar';

const CheckoutDeliveryComponent = () => {
	let navigate = useNavigate();
	return (
		<CategoriesLayout>
			<CheckoutForm />
			<ShippingSummary />

			<button
				onClick={() => navigate('/checkout-payment?checkout-delivery=done')}
				className='form-action'
			>
				SAVE AND CONTINUE
			</button>
		</CategoriesLayout>
	);
};

export const CheckoutDelivery = () => {
	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}));

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<AppBarElement />
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Grid container spacing={2}>
						{/* add your own code here  */}
						<CheckoutDeliveryComponent />
						{/* add your own code here  */}
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default CheckoutDelivery;
