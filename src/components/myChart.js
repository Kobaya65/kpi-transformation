import Chart from "chart.js";
import React, { useEffect } from "react";

/**
 * create a graph based on the data provided
 *
 * from https://dev.to/narendersaini32/how-to-create-charts-using-chart-js-with-react-4c4n
 *
 * props.chartType  type of chart (line, bar, pie, etc.)
 * props.data       data with the right structure (see https://www.chartjs.org/docs/latest/)
 * props.title      title of the graph
 */
export default function MyChart(props) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: props.chartType,
      data: props.data,
      options: {
        title: {
          display: props.title ? true : false,
          text: props.title,
        },
        scales: {
          xAxes: [
            {
              type: "time",
            },
          ],
        },
      },
    });
  });

  return (
    <div className="App">
      <canvas id="myChart" />
    </div>
  );
}
