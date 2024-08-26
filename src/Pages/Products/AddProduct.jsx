import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ref, push, set, getDatabase } from "firebase/database";
import toast from "react-hot-toast";
import app from "../../firebase";


const AddProduct = () => {
  const initialValues = {
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    supplier: "",
    delivered: 10,
    sku: "KTH",
    imageUrl: "",
  };

  const validationSchema = Yup.object().shape({
    department: Yup.string().required("Department is required"),
    name: Yup.string().required("Product Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .min(200, "Price must be greater than 499/-")
      .required("Price is required"),
    stock: Yup.number()
      .min(4, "Stock Available must be greater than 4")
      .required("Stock Available is required"),
    supplier: Yup.string().required("Supplier Name is required"),
    imageUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values,'values')
    const db = getDatabase(app);
    const productsRef = ref(db, "inventory");

    try {
      const newProductRef = push(productsRef);
      await set(newProductRef, values);
      toast.success("Product added successfully");
      
    } catch (error) {
      toast.error(`Error adding product: ${error.message}`);
    }
  };

  return (
    <div className="w-full lg:w-10/12 h-full mx-auto px-5 mt-2 flex flex-col gap-4 overflow-x-auto">
      <div className="bg-white rounded-md shadow-xl border-t-2 px-4 pt-5 pb-2">
        <div className="text-center text-xs font-semibold -mt-2 mb-4">
          Add New Product
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2 cursor-pointer">
                <label className="text-xs" htmlFor="department">
                  Department
                </label>
                <Field
                  as="select"
                  id="department"
                  name="department"
                  className="px-2 py-3 border rounded-md cursor-pointer"
                >
                  <option value="" className="cursor-pointer">Select Department</option>
                  <option value="Wired" className="cursor-pointer">Wired</option>
                  <option value="Wireless" className="cursor-pointer">Wireless</option>
                  <option value="Speaker" className="cursor-pointer">Speaker</option>
                </Field>
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="name">
                  Product Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="price">
                  Price
                </label>
                <Field
                  type="number"
                  id="price"
                  name="price"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="stock">
                  Stock Available
                </label>
                <Field
                  type="number"
                  id="stock"
                  name="stock"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="stock"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="supplier">
                  Supplier Name
                </label>
                <Field
                  type="text"
                  id="supplier"
                  name="supplier"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="supplier"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="description">
                  Description
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="col-span-12 lg:col-span-6 flex flex-col gap-2">
                <label className="text-xs" htmlFor="imageUrl">
                  Image URL
                </label>
                <Field
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  className="px-2 py-3 border rounded-md"
                />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="col-span-12 w-full text-center bg-[#222] py-2 rounded-lg text-white text-sm"
              >
                Create New Product
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
