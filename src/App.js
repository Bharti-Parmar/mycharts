import React from "react";
import ReactEcharts from "echarts-for-react"; 
import edata from './data.json';
import Bar from './bar';
import Scatter from "./scatter";

function App() {  
  const arr = edata;
  const groupAndAverage = (arr = []) => {
      const groups = arr.reduce((acc, obj) => {
          const name = obj.Alcohol;
        if (acc[name]) {
            (acc[name]["Malic Acid"] += obj["Malic Acid"]) && ++acc[name].Average;
        }
        else { acc[name] = obj;
            acc[name].Average = 1;
        };
        return acc;
      }, {});
        const res = Object.keys(groups).map( name => { groups[name].Average = groups[name]["Malic Acid"]/groups[name].Average;
        return groups[name];
      });
      return res;
  };

  const arrResult = groupAndAverage(arr);
  const alcohol = arrResult.map((item) => item.Alcohol);
  const avg = arrResult.map((item) => item.Average);
  console.log('alcohol list ' + alcohol);
  console.log('avg list ' + avg);

  const option = {
    xAxis: {
      type: 'category',
      data: alcohol
    },
    yAxis: {
      type: 'value',
      data: avg
    },
    series: [
      {
        data: [...alcohol],
        type: 'bar'
      }
    ]
  }; 


  return <>
    <div className="font-bold text-center">Bar Chart</div>
    <ReactEcharts 
      option={option}
    />
    <div className="font-bold text-center">Scatter Chart</div>
    <Scatter />
  </>;
} 
export default App;