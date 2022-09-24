import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
