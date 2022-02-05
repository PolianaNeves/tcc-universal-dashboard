import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import {
  ratingsOptionsChart,
  ratingsFilterMenus,
  ratingsHeaders,
  DEFAULT_BRANCH,
} from "../constants";
import api from "../services/api";

export default function RatingsPage(props) {
  const [chartData, setChartData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const callApiService = async () => {
    await api
      .get("/count/by/ratings")
      .then((response) => {
        const responseData = response.data.data
        const filteredRating = responseData.filter(
          (object) => object.key === DEFAULT_BRANCH
        );
        setChartData(filteredRating[0].data);
        setResponseData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDefaultData = () => {
    const filteredRating = responseData.filter(
      (object) => object.key === DEFAULT_BRANCH
    );
    setChartData(filteredRating[0].data);
  };

  useEffect(() => {
    if (chartData == null) {
      callApiService();
    }
  }, [chartData]);

  const callRatingsServices = async (chosenRating) => {
    const isRatingSelected =
      chosenRating !== "" &&
      chosenRating !== ratingsFilterMenus.selectList[0].placeholder;

    if (isRatingSelected) {
      const filteredRating = responseData.filter(
        (object) => object.key === chosenRating
      );
      setChartData(filteredRating[0].data);
    } else {
      getDefaultData();
    }
  };

  const handleFilter = () => {
    var ratingsElement = document.getElementById(
      ratingsFilterMenus.selectList[0].id
    );
    callRatingsServices(ratingsElement.value);
  };

  const clearFilters = () => {
    var ratingsElement = document.getElementById(
      ratingsFilterMenus.selectList[0].id
    );
    ratingsElement.value = ratingsFilterMenus.selectList[0].placeholder
    getDefaultData()
  }

  return (
    <>
      <h1 className="page-title">Análise por Pontuação</h1>
      <div className="section-filter">
        <FilterMenu selectList={ratingsFilterMenus.selectList} />
        <button className="filter-btn" onClick={() => handleFilter()}>
          Filtrar por Pontuação
        </button>
        <button className="filter-btn" onClick={() => clearFilters()}>
          Limpar Filtros
        </button>
      </div>
      {chartData && (
        <BarChart
          data={chartData}
          options={ratingsOptionsChart}
          headers={ratingsHeaders}
        />
      )}
    </>
  );
}
