import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const Navbar = () => {
  return (
    <div className="py-2 bg-transparent top-0 sticky flex justify-end px-6 items-center  ">
     
      <div>
      <Avatar name="Admin" size="40" round="20px"  color="black" className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
