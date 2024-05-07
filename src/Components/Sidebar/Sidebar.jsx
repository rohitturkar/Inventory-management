import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { useParams } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation();
  const {id}=useParams()

  return (
    <div className='fixed left-0  w-2/12 h-full bg-white  shadow-2xl px-2 py-2 hidden lg:block'>

<div className="text-gray-700 font-bold text-2xl px-2 py-2 ">Inventoryfy</div>
      <div className='mt-10'>
        <ul className='flex flex-col gap-4 justify-center'>
          <Link
            to="/"
            className={`text-md font-semibold px-2 py-2 flex gap-1 items-center ${location.pathname === '/' ? 'bg-gray-200  rounded-lg' : ''}`}
          >
            <MdDashboard size={22} color="#222" />
            <span>Dashboard</span>
          </Link>

          <Link
  to='/product'
  className={`text-md font-semibold  px-2 py-2 flex items-center gap-1 ${location.pathname === '/product' || location.pathname === `/product/${id}` ? 'bg-gray-200 rounded-lg ' : ''}`}
>
            <MdProductionQuantityLimits size={22} color='#222' />
            <span>Product</span>
          </Link>

         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
