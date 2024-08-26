import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAnglesDown } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getDatabase, ref, update } from "firebase/database";
import app from "../../firebase";
import toast from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 40,
  p: 2,
  border: "none",
};

const EditProduct = ({ open, handleClose, inventoryData, id }) => {
  const initialValues = inventoryData.filter((item) => item.id === id)[0];
  

  const validationSchema = Yup.object().shape({
    department: Yup.string().required("Department is required"),
    name: Yup.string().required("Product Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .min(500, "Price must be greater than 499/-")
      .required("Price is required"),
    stock: Yup.number()
      .min(4, "Stock Available must be greater than 4")
      .required("Stock Available is required"),
    supplier: Yup.string().required("Supplier Name is required"),
    imageUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
  });

  const handleSubmit = async (values) => {
    const db = getDatabase(app);
    const productRef = ref(db, `inventory/${id}`);

    try {
      await update(productRef, values);
     toast.success("Product updated successfully");
     handleClose()
    } catch (error) {
      toast.error("Error updating product:", error);
    }
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center text-xs font-semibold ">Edit Details</div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="grid grid-cols-12 gap-4">
                <div className="col-span-12 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="department">
                    Department
                  </label>
                  <Field
                    as="select"
                    id="department"
                    name="department"
                    className="px-2 py-4 rounded-md border text-xs "
                  >
                    <option value="">Select Department</option>
                    <option value="Toys">Toys</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                  </Field>
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="name">
                    Product Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="price">
                    Price
                  </label>
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="stock">
                    Stock Available
                  </label>
                  <Field
                    type="number"
                    id="stock"
                    name="stock"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="stock"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="supplier">
                    Supplier Name
                  </label>
                  <Field
                    type="text"
                    id="supplier"
                    name="supplier"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="supplier"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="description">
                    Description
                  </label>
                  <Field
                    type="text"
                    id="description"
                    name="description"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                <div className="col-span-6 flex flex-col gap-2">
                  <label className="text-xs" htmlFor="imageUrl">
                    Image URL
                  </label>
                  <Field
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="px-2 py-4 rounded-md border text-xs "
                  />
                  <ErrorMessage
                    name="imageUrl"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="col-span-12  w-full text-center bg-[#222]  py-4 px-2 rounded-lg text-white text-sm "
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default EditProduct;
