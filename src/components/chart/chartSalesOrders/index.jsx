import React from "react";
import Chart from "react-apexcharts";
import "./index.css";

const SalesOrdersChart = () => {
  const config = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };
  return (
    <>
      <div id="sales_orders_pie_box" sx={{ sm:{ paddingBottom: "10px"},  }} style={{ marginTop:"50px" }}>
        <h4 className="sales_orders_header"> Orders Overview </h4>
        
        <Chart
            options={config.options}
            series={config.series}
            type="donut"
            width="100%"
            height="auto"
          />

      </div>
    </>
  );
};

export default SalesOrdersChart;
