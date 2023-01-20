import React from "react";
import ReactEcharts from "echarts-for-react"; 

function BarChart({props}) {  

  return <ReactEcharts 
          // option={option}
          option={props.option}
          />;
} 
export default BarChart;