import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Vendors from "./pages/vendors";
import { Categories } from "./pages/categories";
import { Orders } from "./pages/orders";
import { Users } from "./pages/users";
import { Products } from "./pages/products";
import { Reviews } from "./pages/reviews";
import { Brands } from "./pages/brands";
import VendorProfile from "./pages/vendors/VendorProfile";
import { ToastContainer } from "react-toastify";
import { ManageCategories } from "./pages/categories/manageCategories";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/profile" element={<VendorProfile />} />

        <Route path="/categories" element={<Categories />} />

        {/* <Route path="/singleVendor/:venId" element={ <Vendors /> } /> */}
        <Route path="/categories">
          <Route index element={<Categories />}/>
          <Route path="manage" element={<ManageCategories />} />
        </Route>
        
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
