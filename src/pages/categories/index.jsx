// welcome to admin dashboard Categories page
// welcome to admin dashboard Users page
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid } from "@mui/material";
import AppBarElement from "../../components/appbar";
import CheckoutForm from '../../components/CheckoutForm';
import OrderSummary from '../../components/orderSummary';
import './index.css';


export const CategoriesComponent = () => {
	return (
		<div className='container'>
			<div className='main'>
				<div className='checkout-form'>
					<h3>Checkout</h3>
					<CheckoutForm />
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
								Ready for pick up between Tuesday 20 Sep and Thursday 22 Sep
								with cheaper shipping fees
							</h6>
							<button className='pickup-action'>select pickup station</button>
						</div>
						<div>
							<div className='delivery-radio'>
								<input type='radio' name='' id='' />
								<p>Pickup station</p>
							</div>
							<h6>Delivered between Tuesday 20 Sep and Thursday 22 Sep</h6>
						</div>
					</div>
				</div>
				<OrderSummary />
			</div>
		</div>
	);
};




export const Categories = () => {
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Grid container spacing={2}>
            {/* add your own code here  */}
				<CategoriesComponent/>
            {/* add your own code here  */}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
