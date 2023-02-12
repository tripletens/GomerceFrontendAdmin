import React from "react";

import five00_img from "../../assets/500_page.png";

import "./index.css";

const Five00page = () => {
  return (
    <>
      <div class="five00_top_div">
        <img class="five00_top_img" src={five00_img} />
        <h3>Something bad just happened</h3>
        <p>Our servers could not handle your request.</p>
        <p>Don't worry, our development team was already notified.</p>
        <p>Try refreshing the page.</p>
        <p>If you think this is an error contact support.</p>
        {/* <a href="#" class="five00_top_link"> */}
        <button
          type="button"
          class="five00_top_button"
        >
          Refresh the page
        </button>
        {/* </a> */}
      </div>
    </>
  );
};

export default Five00page;
