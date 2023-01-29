import React from "react";
import "./index.css";
import BasicTab from "../tab";

const SalesReportChart = () => {
  const tabOptions = [
    {
      title: "Today",
    },
    {
      title: "Monthly",
    },
    {
      title: "Yearly",
    },
  ];

  return (
    <>
      <div className="sales_report_box">
        <h4 className="sales_report_header"> Sales Report </h4>
         <BasicTab item={tabOptions} />
      </div>
    </>
  );
};

export default SalesReportChart;
