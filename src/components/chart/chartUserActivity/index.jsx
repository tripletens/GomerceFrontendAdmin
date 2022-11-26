import React from "react";
import Chart from "react-apexcharts";
import "./index.css";

const ChartUserActivity = () => {
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
      <div className="users_box">
        <h4 className="users_header"> User Activity </h4>
        <div className="users_chart">
          <Chart
            options={config.options}
            series={config.series}
            type="line"
            width="100%"
            height="350px"
          />
        </div>
      </div>
    </>
  );
};

export default ChartUserActivity;
