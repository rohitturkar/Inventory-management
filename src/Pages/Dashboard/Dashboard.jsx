import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaCartShopping } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
const Dashboard = () => {
  return (
  
        
<div className='grid lg:grid-cols-12 lg:gap-2 gap-5 mt-5  px-2  justify-center w-full'>

  <div className=' lg:col-span-4 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg flex justify-between items-center  '>
   <span><FaCartShopping size='100' color='white'/></span>
   <div className='flex gap-2 flex-col'  >
   <h2 className='text-5xl text-white font-bold'>
    2500
    </h2>
    <p className='text-white text-sm font-semibold'>Total Stocks</p>
  </div>
   </div>
   
   <div className=' lg:col-span-4 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg flex justify-between items-center  '>
   <span><MdDeliveryDining size='100' color='white'/></span>
   <div className='flex gap-2 flex-col'  >
   <h2 className='text-5xl text-white font-bold'>
    100+
    </h2>
    <p className='text-white text-sm font-semibold'>Total Delivery</p>
  </div>
   </div>
   
   <div className=' lg:col-span-4 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg flex justify-between items-center  '>
   <span><CiShoppingBasket size='100' color='white'/></span>
   <div className='flex gap-2 flex-col'  >
   <h2 className='text-5xl text-red-500 font-bold'>
    2
    </h2>
    <p className='text-white text-sm font-semibold'>Low Stoks Item</p>
  </div>
   </div>
   
 
 

</div>
   
  )
}

export default Dashboard