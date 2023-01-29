import React from "react";
import Chart from "react-apexcharts";
import "./index.css";

// import { withWidth } from '@material-ui/core';

// import withWidth from '@material-ui/core/withWidth';

const SalesOrdersChart = (props) => {
  const { width } = props;
  const chartHeight = width === 'xs' ? 300 : 400;
  const chartWidth = width === 'xs' ? '90%' : '100%';

  const config = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };
  return (
    <>
      <div className="sales_orders_box">
        <h4 className="sales_orders_header"> Orders Overview </h4>
        <div className="sales_orders_chart">
          <Chart
            options={config.options}
            series={config.series}
            type="donut"
            width={chartWidth}
            height={chartHeight}
          />
        </div>
      </div>
    </>
  );
};

export default SalesOrdersChart;