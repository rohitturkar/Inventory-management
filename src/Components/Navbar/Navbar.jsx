import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";

import { CiShop } from "react-icons/ci";


import Avatar from "react-avatar";
import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="py-2 bg-transparent top-0 sticky flex justify-between lg:justify-end px-6 items-center  ">
        <div className="lg:hidden">
          <IoReorderThreeOutline size={40} onClick={toggleDrawer} className='cursor-pointer' />
        </div>

        <div>
          <Avatar
            name="Admin"
            size="40"
            round="20px"
            color="black"
            className="cursor-pointer"
          />
        </div>
      </div>
      <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;

function TemporaryDrawer({ open, toggleDrawer }) {
  const location = useLocation();
  const {id}=useParams()

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <div className="text-gray-700 font-bold text-2xl px-2 py-2 ">
            Inventoryfy
          </div>
          <div className="mt-10">
            <ul className="flex flex-col gap-4 justify-center">
              <Link
                to="/"
                className={`text-md font-semibold px-2 py-2 flex gap-1 items-center ${
                  location.pathname === "/" ? "bg-gray-200  rounded-lg" : ""
                }`}
              >
                <MdDashboard size={22} color="#222" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/product"
                className={`text-md font-semibold  px-2 py-2 flex items-center gap-1 ${
                  location.pathname === "/product" ||
                  location.pathname === `/product/${id}`
                    ? "bg-gray-200 rounded-lg "
                    : ""
                }`}
              >
                <MdProductionQuantityLimits size={22} color="#222" />
                <span>Product</span>
              </Link>
            </ul>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
