import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { FaCartShopping } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
const Department = () => {
  return (
  
        
<div className='grid lg:grid-cols-12 lg:gap-2 gap-5 mt-10 px-2  justify-center w-10/12 '>

  <div className=' lg:col-span-3 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg  text-center  '>
   <p className='text-lg'>Toys</p>
   </div>
   <div className=' lg:col-span-3 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg  text-center  '>
   <p className='text-lg'>Clothing</p>
   </div>
   <div className=' lg:col-span-3 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg text-center  '>
   <p className='text-lg'>Phone Cover</p>
   </div>
   <div className=' lg:col-span-3 bg-[#333] shadow-2xl  max-w-[1200px] text-white p-4 rounded-lg text-center  '>
   <p className='text-lg'>Phone Cover</p>
   </div>
   
   
   
 
 

</div>
   
  )
}

export default Department