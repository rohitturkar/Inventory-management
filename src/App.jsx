import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Product from "./Pages/Products/Product";
import ProductDetails  from "./Pages/Products/ProductDetails"
import AddProduct from "./Pages/Products/AddProduct"

import Layout from "./Layout/Layout";

const App = () => {


  return (
    <>
  
    <Routes>
      <Route path="/" element={<Layout sidebar={<Sidebar />} content={<Dashboard />} />} />
      <Route path="/product" element={<Layout sidebar={<Sidebar />} content={<Product />} />} />
      <Route path="/product/:id" element={<Layout sidebar={<Sidebar />} content={<ProductDetails />} />} />
      <Route path="/add_products" element={<Layout sidebar={<Sidebar />} content={<AddProduct />} />} />
      
    </Routes>
  </>
  );
};

export default App;
