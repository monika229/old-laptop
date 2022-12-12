import React from "react";
import ChartBar from "./ChartBar";  // components/NewExpense/NewExpense

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label} // label of january feb march (search more about label)
        />
      ))}
    </div>
  );
};


export default Chart;