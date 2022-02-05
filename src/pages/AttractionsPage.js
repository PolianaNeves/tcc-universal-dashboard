import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import {
  attractionsFilterMenus,
  attractionsHeaders,
  attractionsOptionsChart,
} from "../constants";
import api from "../services/api";

export default function AttractionsPage(props) {
  const [chartData, setChartData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const callApiService = async () => {
    await api
      .get(`/count/by/attraction`)
      .then((response) => {
        const responseData = response.data.data;
        const defaultData = responseData.filter(
          (element) => element.branch === "full"
        );
        setChartData(defaultData[0].data);
        setResponseData(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDefaultData = () => {
    const defaultData = responseData.filter(
      (element) => element.branch === "full"
    );
    setChartData(defaultData[0].data);
  };

  useEffect(() => {
    callApiService();
  }, []);

  const callAttractionsServices = async (chosenBranch, chosenTopN) => {
    const isBranchSelected =
      chosenBranch !== "" &&
      chosenBranch !== attractionsFilterMenus.selectList[0].placeholder;
    const isTopNFilled =
      chosenTopN !== "" &&
      chosenTopN !== attractionsFilterMenus.searchList[0].placeholder;

    if (isBranchSelected && !isTopNFilled) {
      const filteredBranch = responseData.filter(
        (object) => object.branch === chosenBranch
      );
      setChartData(filteredBranch[0].data);
    } else if (isBranchSelected && isTopNFilled) {
      const filteredBranch = responseData.filter(
        (object) => object.branch === chosenBranch
      );
      const firstN = filteredBranch[0].data.slice(0, chosenTopN);
      setChartData(firstN);
    } else if (!isBranchSelected && isTopNFilled) {
      const filteredBranch = responseData.filter(
        (object) => object.branch === "full"
      );
      const firstN = filteredBranch[0].data.slice(0, chosenTopN);
      setChartData(firstN);
    } else {
      getDefaultData();
    }
  };

  const handleFilter = () => {
    var branchElement = document.getElementById(
      attractionsFilterMenus.selectList[0].id
    );
    var attractionsElement = document.getElementById(
      attractionsFilterMenus.searchList[0].id
    );
    callAttractionsServices(branchElement.value, attractionsElement.value);
  };

  const clearFilters = () => {
    var branchElement = document.getElementById(
      attractionsFilterMenus.selectList[0].id
    );
    branchElement.value = attractionsFilterMenus.selectList[0].placeholder;
    var attractionsElement = document.getElementById(
      attractionsFilterMenus.searchList[0].id
    );
    attractionsElement.value = ""
    getDefaultData();
  };

  return (
    <>
      <h1 className="page-title">Attractions page</h1>
      <div className="section-filter">
        <FilterMenu
          selectList={attractionsFilterMenus.selectList}
          searchList={attractionsFilterMenus.searchList}
        />
        <button className="filter-btn" onClick={() => handleFilter()}>
          Filtrar atrações
        </button>
        <button className="filter-btn" onClick={() => clearFilters()}>
          Limpar Filtros
        </button>
      </div>
      {chartData && (
        <BarChart
          data={chartData}
          options={attractionsOptionsChart}
          headers={attractionsHeaders}
        />
      )}
    </>
  );
}
