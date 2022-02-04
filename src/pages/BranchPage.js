import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import {
  branchOptionsChart,
  branchHeaders,
} from "../constants";
import api from "../services/api";
import "./BranchPage.css";

export default function BranchPage(props) {
  const [chartData, setChartData] = useState(null);

  const getDefaultData = async () => {
    await api
      .get("/count/by/branch")
      .then((response) => {
        console.log(response.data.data)
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (chartData == null) {
      getDefaultData();
    }
  }, [chartData]);

  return (
    <>
      <h1 className="page-title">Análise por Filial</h1>
      {chartData && (
        <BarChart
          data={chartData}
          options={branchOptionsChart}
          headers={branchHeaders}
        />
      )}
    </>
  );
}
