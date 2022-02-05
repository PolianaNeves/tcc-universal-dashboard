import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import { yearOptionsChart, yearFilterMenus, yearHeaders, DEFAULT_BRANCH } from "../constants";
import api from "../services/api";

export default function YearPage(props) {
  const [chartData, setChartData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const callApiService = async () => {
    await api
      .get("/count/by/year")
      .then((response) => {
        const responseData = response.data.data
        const filteredYear = responseData.filter(
          (object) => object.key === DEFAULT_BRANCH
        );
        setChartData(filteredYear[0].data);
        setResponseData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDefaultData = () => {
    const filteredYear = responseData.filter(
      (object) => object.key === DEFAULT_BRANCH
    );
    setChartData(filteredYear[0].data);
  };

  useEffect(() => {
    if (chartData == null) {
      callApiService();
    }
  }, [chartData]);

  const callRatingsServices = async (chosenRating) => {
    const isRatingSelected =
      chosenRating !== "" &&
      chosenRating !== yearFilterMenus.selectList[0].placeholder;

    if (isRatingSelected) {
      const filteredYear = responseData.filter(
        (object) => object.key === chosenRating
      );
      setChartData(filteredYear[0].data);
    } else {
      getDefaultData();
    }
  };

  const handleFilter = () => {
    var yearElement = document.getElementById(
      yearFilterMenus.selectList[0].id
    );
    callRatingsServices(yearElement.value);
  };

  const clearFilters = () => {
    var yearElement = document.getElementById(
      yearFilterMenus.selectList[0].id
    );
    yearElement.value = yearFilterMenus.selectList[0].placeholder
    getDefaultData()
  }

  return (
    <>
      <h1 className="page-title">Análise por Ano</h1>
      <div className="section-filter">
        <FilterMenu selectList={yearFilterMenus.selectList} />
        <button className='filter-btn' onClick={() => handleFilter()}>Filtrar por Ano</button>
        <button className='filter-btn' onClick={() => clearFilters()}>Limpar Filtros</button>
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
