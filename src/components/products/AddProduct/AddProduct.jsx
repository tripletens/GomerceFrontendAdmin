import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import ProductForm from "./ProductForm";
import { Box } from "@mui/system";

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Product
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ProductForm setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddProduct;
