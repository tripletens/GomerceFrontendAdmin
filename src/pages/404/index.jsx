import React from "react";

import four_o_four_img from "../../assets/404.png";

import "./index.css";

const FourOfourPage = () => {
  return (
    <>
      <div class="four_top_div">
        <img class="four_top_img" src={four_o_four_img} />
        <h3>Nothing to see here</h3>
        <p>Page you are trying to open does not exist. </p>
        <p>
          You may have mistyped the address, or the page has been moved to
          another URL.{" "}
        </p>
        <p>
          If you think this
          {/* <br/> */}
          is an error contact support.
        </p>
        <a href="#" class="four_top_link">
          <button type="button" class="four_top_button">Take me back to home</button>
        </a>
      </div>
    </>
  );
};

export default FourOfourPage;
