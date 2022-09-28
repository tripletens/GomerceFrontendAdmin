
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Vendors from "./pages/vendors";
import { Categories } from './pages/categories';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/categories" element={<Categories />}/>
      </Routes>
  );
};

export default App;
