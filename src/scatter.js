
import React from "react";
import ReactEcharts from "echarts-for-react"; 

function ScatterChart() {  

const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
        ],
        type: 'scatter'
      }
    ]
  };
  return <ReactEcharts 
          option={option}
          />;
} 
export default ScatterChart;