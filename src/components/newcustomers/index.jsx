import React from "react";
import "./index.css";

import CachedIcon from "@mui/icons-material/Cached";
import PersonIcon from "@mui/icons-material/Person";

const NewCustomersComponent = () => {
  return (
    <>
      <div className="users_box">
        <h4 className="users_header">
          New Customers <CachedIcon sx={{ float: "right" }} />{" "}
        </h4>
        <div className="new_customers_container">
          <div className="new_customers_div">
            <div className="new_customers_user"><PersonIcon /></div>
            <div className="new_customers_name_div">
              <h5>John Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
            <p>2 orders</p>
            <p>$2000</p>
          </div>
          <hr />

          <div className="new_customers_div">
            <div className="new_customers_user"><PersonIcon /></div>
            <div className="new_customers_name_div">
              <h5>John Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
            <p>2 orders</p>
            <p>$2000</p>
          </div>
          <hr />

          <div className="new_customers_div">
            <div className="new_customers_user"><PersonIcon /></div>
            <div className="new_customers_name_div">
              <h5>John Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
            <p>2 orders</p>
            <p>$2000</p>
          </div>

          <hr />

          <div className="new_customers_div">
            <div className="new_customers_user"><PersonIcon /></div>
            <div className="new_customers_name_div">
              <h5>John Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
            <p>2 orders</p>
            <p>$2000</p>
          </div>

          <hr />

          <div className="new_customers_div">
            <div className="new_customers_user"><PersonIcon /></div>
            <div className="new_customers_name_div">
              <h5>John Doe</h5>
              <p>johndoe@gmail.com</p>
            </div>
            <p>2 orders</p>
            <p>$2000</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default NewCustomersComponent;
