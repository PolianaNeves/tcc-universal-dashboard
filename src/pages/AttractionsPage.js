import React, { useEffect, useState } from "react";
import ColumnChart from "../components/ColumnChart";
import FilterMenu from "../components/FilterMenu";
import {
  attractionsFilterMenus,
  attractionsHeaders,
  attractionsOptionsChart,
} from "../constants";
import api from "../services/api";

export default function AttractionsPage(props) {
  const [chartData, setChartData] = useState(null);

  const callAttractionsServices = async (chosenBranch, chosenLabel) => {
    const isBranchSelected =
      chosenBranch !== "" &&
      chosenBranch !== attractionsFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== attractionsFilterMenus.selectList[1].placeholder;

    if (isBranchSelected && isLabelSelected) {
      await api
        .get(`/count/${chosenLabel}/by/${chosenBranch}/attraction`)
        .then((response) => {
          setChartData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isBranchSelected && !isLabelSelected) {
      await api
        .get(`/count/by/${chosenBranch}/attraction`)
        .then((response) => {
          setChartData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleFilter = () => {
    var branchElement = document.getElementById(
      attractionsFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      attractionsFilterMenus.selectList[1].id
    );
    callAttractionsServices(branchElement.value, labelElement.value);
  };

  return (
    <>
      <h1 className="page-title">Attractions page</h1>
      <div className='section-filter'>
        <FilterMenu selectList={attractionsFilterMenus.selectList} />
        <button className='filter-btn' onClick={() => handleFilter()}>Filtrar atrações</button>
      </div>
      {chartData && (
        <ColumnChart
          data={chartData}
          options={attractionsOptionsChart}
          headers={attractionsHeaders}
        />
      )}
    </>
  );
}
