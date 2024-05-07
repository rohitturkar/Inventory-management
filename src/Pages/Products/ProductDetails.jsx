import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log('console', id);
  const inventoryData = useSelector((state) => state.product.inventoryData);
  console.log(inventoryData);

  const filteredData = inventoryData.filter((item) => item.id == id);

  return (
    <div className="px-2 mt-10 w-full grid grid-cols-12 lg:gap-6">
      <div className="max-w-[600px] h-full lg:col-span-4 col-span-12">
        <img
          src={filteredData[0]?.imageUrl}
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className='lg:col-span-8 text-md flex flex-col gap-4 lg:mt-5 col-span-12'>
      <p className='flex gap-2 ' >
        Name: <span>{filteredData[0]?.name}</span>
      </p>
      <p className='flex gap-2 ' >
        Product Description: <span>{filteredData[0]?.description}</span>
      </p>
      <p className='flex gap-2 ' >
        Department: <span>{filteredData[0]?.department}</span>
      </p>
      <p className='flex gap-2 ' >
        Total Instock: <span>{filteredData[0]?.stock}</span>
      </p>
      <p className='flex gap-2 ' >
        Price: <span>{filteredData[0]?.price} /-</span>
      </p>
      <p className='flex gap-2 ' >
        Supplier: <span>{filteredData[0]?.supplier}</span>
      </p>
      </div>
    </div>
  );
};

export default ProductDetails;
