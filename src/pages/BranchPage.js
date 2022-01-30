import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import { branchOptionsChart } from "../constants";
import api from "../services/api";

const branchHeaders = ["Branches", "Reviews"];

export default function BranchPage(props) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    api
      .get("/count/by/branch")
      .then((response) => {
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Branch page</h1>
      {chartData && (<BarChart data={chartData} options={branchOptionsChart} headers={branchHeaders}/>)}
    </>
  );
}
