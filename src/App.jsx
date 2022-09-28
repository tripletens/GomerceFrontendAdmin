import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Vendors from "./pages/vendors";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
        
      </Routes>
  );
};

export default App;
