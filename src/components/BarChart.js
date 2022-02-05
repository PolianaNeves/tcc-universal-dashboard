import React from "react";
import { Chart } from "react-google-charts";
import { parseDataToMultipleSeries } from "../utils/utils";

export default function BarChart(props) {
  const parsedData = parseDataToMultipleSeries(props.headers, props.data)
  return (
    <Chart
      chartType="BarChart"
      data={parsedData}
      options={props.options}
    />
  );
}
