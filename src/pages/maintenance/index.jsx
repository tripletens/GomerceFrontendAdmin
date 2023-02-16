import React from "react";

import './index.css';

import maintenance_img from "../../assets/under_maintenance.png";

const Maintenance = () => {
  return (
    <>
      <div class="maintenance_top_div">
        <img class="maintenance_top_img" src={maintenance_img} />
        <h3>Under maintenance</h3>
        <p>This page is under maintenance. Please try again
after 30 minutes</p>
        <a href="#" class="maintenance_top_link">
          <button type="button" class="maintenance_top_button">
          TAKE ME BACK TO HOME PAGE
          </button>
        </a>
      </div>
    </>
  );
};

export default Maintenance;
