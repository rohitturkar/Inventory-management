import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Product from "./Pages/Products/Product";
import ProductDetails  from "./Pages/Products/ProductDetails"
import Department from "./Pages/Departments/Department";
import Layout from "./Layout/Layout";

const App = () => {


  return (
    <>
  
    <Routes>
      <Route path="/" element={<Layout sidebar={<Sidebar />} content={<Dashboard />} />} />
      <Route path="/product" element={<Layout sidebar={<Sidebar />} content={<Product />} />} />
      <Route path="/product/:id" element={<Layout sidebar={<Sidebar />} content={<ProductDetails />} />} />
      <Route path="/department" element={<Layout sidebar={<Sidebar />} content={<Department />} />} />
    </Routes>
  </>
  );
};

export default App;
