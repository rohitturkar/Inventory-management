import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAnglesDown } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, get, remove } from "firebase/database";
import { RiArrowDropDownLine } from "react-icons/ri";
import app from "../../firebase";
import toast from "react-hot-toast";
import { SET_PRODCUT_DATA } from "../../Redux/Slices/productSlice";
import EditProduct from "./EditProduct";
import Delete from "./DeleteProduct";

export default function Product() {
  const [selectedDepartment, setSelectedDepartment] = useState("Wired");
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [id, setId] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseForDelete = () => setOpen1(false);
  const inventoryData = useSelector((state) => state.product.inventoryData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredData = inventoryData.filter((item) => {
    if (checked) {
      return item.department === selectedDepartment && item.stock < 10;
    } else {
      return item.department === selectedDepartment && item.stock > 0;
    }
  });

  const fetchInventoryData = async () => {
    const db = getDatabase(app);
    const databaseNodeReference = ref(db, "inventory");
    const snapshot = await get(databaseNodeReference);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const arrayOfInventory = Object.keys(data).map((elementId) => {
        return {
          ...data[elementId],
          id: elementId,
        };
      });

      dispatch(SET_PRODCUT_DATA(arrayOfInventory));
    } else {
      toast.error(`Data is not available`);
    }
  };

  useEffect(() => {
    fetchInventoryData();
  }, [open,open1]);

  return (
    <>
      <div className="w-full h-full mx-auto px-5 mt-5 flex flex-col gap-4 overflow-x-auto">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="flex justify-between gap-10 items-center">
            <h2 className="text-lg font-semibold">Products</h2>
            <div className="flex justify-center gap-1 items-center">
              <input
                type="checkbox"
                id="myCheckbox"
                name="myCheckbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label htmlFor="myCheckbox" className="text-md">
                Low stock item
              </label>
            </div>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <select
              className="border p-2 rounded-lg cursor-pointer"
              value={selectedDepartment}
              onChange={(event) => setSelectedDepartment(event.target.value)}
            >
              <option value="Wireless">Wireless</option>
              <option value="Wired">Wired</option>
              <option value="Speaker">Speaker</option>
            </select>

            <div>
              <Link
                to="/add_products"
                class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add Product
              </Link>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Product Image
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Stocks
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {inventoryData.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No data available
                  </td>
                </tr>
              ) : filteredData.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center p-10 text-sm font-semibold"
                  >
                    No matching data available
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item?.name} className="cursor-pointer">
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="h-40 w-40 flex-shrink-0">
                          <img
                            className="h-40 w-40 object-cover"
                            src={item?.imageUrl}
                            alt={item?.name}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="text-sm text-gray-900 ">{item.name}</div>
                    </td>
                    <td className="whitespace-wrap  py-4 ">
                      <div className="text-sm text-gray-900 ">
                        {item?.description}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12  py-4">
                      <div className="text-sm text-gray-900 ">
                        {item?.price}
                      </div>
                    </td>
                    <td className="whitespace-nowrap  px-12 py-4">
                      <div
                        className={`text-sm text-gray-700 font-semibold font flex items-center  gap-1  `}
                      >
                        {item?.stock}{" "}
                        <span>
                          {item?.stock < 10 ? (
                            <FaAnglesDown size={10} color="red" />
                          ) : (
                            ""
                          )}
                        </span>{" "}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4 text-right text-sm font-medium ">
                      <details className="dropdown">
                        <summary className="btn rounded-full p-2">
                          <RiArrowDropDownLine size={30} />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-30 p-2 shadow mr-2">
                          <li onClick={() => navigate(`/product/${item.id}`)}>
                            <a>View</a>
                          </li>
                          <li
                            onClick={() => {
                              handleOpen();
                              setId(item.id);
                            }}
                          >
                            <a>Edit</a>
                          </li>
                          <li
                            onClick={() => {
                              setOpen1(true);
                              setId(item.id);
                            }}
                          >
                            <a>Delete</a>
                          </li>
                        </ul>
                      </details>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <EditProduct
        open={open}
        handleClose={handleClose}
        inventoryData={inventoryData}
        id={id}
      />
      <Delete
        open={open1}
        handleClose={handleCloseForDelete}
        inventoryData={inventoryData}
        id={id}
      />
    </>
  );
}
