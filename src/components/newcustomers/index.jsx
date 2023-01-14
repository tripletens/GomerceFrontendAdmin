import React from "react";
import "./index.css";

import CachedIcon from "@mui/icons-material/Cached";
import PersonIcon from "@mui/icons-material/Person";
import { Stack, Divider } from "@mui/material";
import NewCustomerTable from "../tables/new_customers";

const NewCustomersComponent = () => {
  return (
    <>
      <div className="users_box" style={{ marginTop: "50px" }}>
        <h4 className="users_header">
          New Customers{" "}
          <CachedIcon sx={{ float: "right", marginRight: "20px" }} />{" "}
        </h4>

        {/* <div className="new_customers_container">
          
        </div> */}
        {/* <div className="new_customers_div"> */}
        {/* <Stack
          direction={{ xs: "row", sm: "row", md: "row", lg: "row" }}
          spacing={0}
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="center"
        >
          <
        </Stack> */}
       <NewCustomerTable />
      </div>
    </>
  );
};

export default NewCustomersComponent;
