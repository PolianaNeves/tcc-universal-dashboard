import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import { yearOptionsChart, yearFilterMenus, yearHeaders } from "../constants";
import api from "../services/api";

export default function YearPage(props) {
  const [chartData, setChartData] = useState(null);

  const getDefaultData = async () => {
    await api
      .get("/count/by/year")
      .then((response) => {
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

  const callYearServices = async (chosenYear, chosenLabel) => {
    const isYearSelected =
      chosenYear !== "" &&
      chosenYear !== yearFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== yearFilterMenus.selectList[1].placeholder;

    if (isYearSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/year/${chosenYear}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isYearSelected && !isLabelSelected) {
      await api
        .get(`/count/by/year/${chosenYear}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isYearSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/year`)
        .then((response) => {
          setChartData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDefaultData();
    }
  };

  const handleFilter = () => {
    var yearElement = document.getElementById(yearFilterMenus.selectList[0].id);
    var labelElement = document.getElementById(
      yearFilterMenus.selectList[1].id
    );
    callYearServices(yearElement.value, labelElement.value);
  };

  return (
    <>
      <h1 className="page-title">Análise por Ano</h1>
      <div className="section-filter">
        <FilterMenu selectList={yearFilterMenus.selectList} />
        <button className='filter-btn' onClick={() => handleFilter()}>Filtrar por Ano</button>
        <button className='filter-btn' onClick={() => getDefaultData()}>Limpar Filtros</button>
      </div>
      {chartData && (
        <BarChart
          data={chartData}
          options={yearOptionsChart}
          headers={yearHeaders}
        />
      )}
    </>
  );
}
