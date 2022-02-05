import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import {
  branchOptionsChart,
  branchHeaders,
  branchOptionsNegPieChart,
  branchOptionsPosPieChart,
  branchPieNegHeaders,
  branchPiePosHeaders,
} from "../constants";
import api from "../services/api";

export default function BranchPage(props) {
  const [chartData, setChartData] = useState(null);
  const [pieData, setPieData] = useState(null);

  const getDefaultData = async () => {
    await api
      .get("/count/by/branch")
      .then((response) => {
        setPieData(response.data.data);
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
        <>
          <BarChart
            data={chartData}
            options={branchOptionsChart}
            headers={branchHeaders}
          />
          {pieData && (
            <>
              <PieChart
                data={pieData}
                options={branchOptionsPosPieChart}
                headers={branchPiePosHeaders}
                isPositive
              />
              <PieChart
                data={pieData}
                options={branchOptionsNegPieChart}
                headers={branchPieNegHeaders}
                isPositive={false}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
