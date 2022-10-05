
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Vendors from "./pages/vendors";
import Users from "./pages/users";
import { Categories } from './pages/categories';
import { Orders } from "./pages/orders";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/users" element={<Users />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default App;
