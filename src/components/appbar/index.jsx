import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../sidebar';
import Navbar from '../navbar';

export default function AppBarElement() {
    // const theme = useTheme();
    const [open, setOpen] = useState(true);

    const [openDashboard, setOpenDashboard] = useState(false);
    const handleOpenDashboardClick = () => {
        setOpenDashboard(!openDashboard);
    };

    const [openVendors, setOpenVendors] = useState(false);
    const handleOpenVendorsClick = () => {
        setOpenVendors(!openVendors);
    };

    const [openUsers, setOpenUsers] = useState(false);
    const handleOpenUsersClick = () => {
        setOpenUsers(!openUsers);
    };

    const [openCategories, setOpenCategories] = useState(false);
    const handleOpenCategoriesClick = () => {
        setOpenCategories(!openCategories);
    };

    const [openProducts, setOpenProducts] = useState(false);
    const handleOpenProductsClick = () => {
        setOpenProducts(!openProducts);
    };

    const [openOrders, setOpenOrders] = useState(false);
    const handleOpenOrdersClick = () => {
        setOpenOrders(!openOrders);
    };

    const [openReviews, setOpenReviews] = useState(false);
    const handleOpenReviewsClick = () => {
        setOpenReviews(!openReviews);
    };

    const [openBrands, setOpenBrands] = useState(false);
    const handleOpenBrandsClick = () => {
        setOpenBrands(!openBrands);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const openSideBarFunction = () => {
        setOpen(!open);
    };

    return (
        <>
            <CssBaseline />
            <Navbar handleDrawerOpen={handleDrawerOpen}
                open={open}
                handleDrawerClose={handleDrawerClose}
                openSideBarFunction={openSideBarFunction} />

            {/* VENDORS,USERS,CATEGORIES,PRODUCTS,ORDERS,REVIEWS,BRANDS */}

            {/* handleOpenVendorsClick, handleOpenUsersClick, handleOpenCategoriesClick
            handleOpenProductsClick, handleOpenOrdersClick, handleOpenReviewsClick, 
            handleOpenBrandsClick */}
            
            <Sidebar 
                open={open} 
                handleDrawerClose={handleDrawerClose}

                openDashboard = {openDashboard}
                handleOpenDashboardClick = {handleOpenDashboardClick}

                openVendors = {openVendors}
                handleOpenVendorsClick = {handleOpenVendorsClick}

                openUsers = {openUsers}
                handleOpenUsersClick = {handleOpenUsersClick}
                
                openCategories = {openCategories}
                handleOpenCategoriesClick = {handleOpenCategoriesClick}

                openProducts = {openProducts}
                handleOpenProductsClick = {handleOpenProductsClick}

                openOrders = {openOrders}
                handleOpenOrdersClick = {handleOpenOrdersClick}

                openReviews = {openReviews}
                handleOpenReviewsClick = {handleOpenReviewsClick}

                openBrands = {openBrands}
                handleOpenBrandsClick = {handleOpenBrandsClick}
            />
        </>
    );
}
