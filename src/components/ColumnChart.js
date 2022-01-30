import React from "react";
import { Chart } from "react-google-charts";
import { parseDataChart } from '../utils/utils';

export default function ColumnChart(props) {
  const parsedData = parseDataChart(props.headers, props.data);

  return (
    <Chart
      chartType="ColumnChart"
      data={parsedData}
      options={props.options}
    />
  );
}
