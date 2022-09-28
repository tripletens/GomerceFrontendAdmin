import React from "react";
import Chart from "react-apexcharts";
import "./index.css";

const DailySalesChart = () => {
  const config = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };
  return (
    <>
      <Chart
        options={config.options}
        series={config.series}
        type="bar"
        width="100%"
        height="400px"
      />
    </>
  );
};

export default DailySalesChart;
