import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ sidebar, content }) => {
  return (
    <div className="grid lg:grid-cols-12 lg:grid-12">
      <div className="lg:col-span-2 hidden lg:block">
        {sidebar}
      </div>
      <div className="lg:col-span-10 col-span-12">
      <Navbar />
        {content}
      </div>
    </div>
  );
};

export default Layout;
