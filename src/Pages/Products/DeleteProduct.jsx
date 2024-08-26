import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { getDatabase, ref, remove } from "firebase/database";
import { IoIosClose } from "react-icons/io";

import app from "../../firebase";
import toast from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 40,
  border: "none",
};

const Delete = ({ open, handleClose, id }) => {
  const handleDelete = async (id) => {
    const db = getDatabase(app);
    const productRef = ref(db, `inventory/${id}`);

    try {
      await remove(productRef);
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Error deleting product:", error);
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
          <div className="flex justify-end items-center gap-2 p-2 ">
            <span className="cursor-pointer" onClick={handleClose}>
              <IoIosClose size={30} />
            </span>
          </div>

          <div className="flex flex-col  p-4 relative">
            <p className="text-md">Are you sure, you want to delete</p>

            <div className="flex justify-end items-center gap-2 p-4 mt-4">
              <button
                className="bg-[#222] text-white px-4 py-1 rounded-md"
                onClick={() => {
                  handleDelete(id);
                }}
              >
                Yes
              </button>
              <button
                className="border border-[#222] text-[#222] px-4 py-1 rounded-md"
                onClick={handleClose}
              >
                No
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;
