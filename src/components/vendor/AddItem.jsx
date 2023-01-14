import React, { useState } from "react";
import { PersonAdd as AddIcon} from "@mui/icons-material";
import { BootstrapButton, SytledModal } from './postStyle'
import Form from "./Form";


const AddItemVendor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BootstrapButton
        onClick={(e) => setOpen(true)}
        variant="contained"
        startIcon={<AddIcon />} size="medium">
         Add Vendor
      </BootstrapButton>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Form setOpen={setOpen}/>
      </SytledModal>
    </>
  );
};

export default AddItemVendor;
