import { Chart } from "react-google-charts";
import { parseDataToPosChart } from '../utils/utils';

export default function PieChart(props) {
  const parsedData = parseDataToPosChart(props.headers, props.data, props.isPositive)
  return (
    <>
      <Chart
        chartType="PieChart"
        data={parsedData}
        options={props.options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}
