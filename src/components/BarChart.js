import React from "react";
import { Chart } from "react-google-charts";
import { parseDataChart } from '../utils/utils';

export default function BarChart(props) {

  const parsedData = parseDataChart(props.headers, props.data);

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="100%"
      data={parsedData}
      options={props.options}
    />
  );
}
