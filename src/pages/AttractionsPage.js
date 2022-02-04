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

  const getDefaultData = async () => {
    await api
      .get(`/count/by/full/attraction`)
      .then((response) => {
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDefaultData();
  }, []);

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
    } else if (!isBranchSelected && isLabelSelected) {
      await api
        .get(`/count/${chosenLabel}/by/full/attraction`)
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

  const getFiltersValues = () => {
    var branchElement = document.getElementById(
      attractionsFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      attractionsFilterMenus.selectList[1].id
    );
    return { branch: branchElement, label: labelElement };
  };

  const handleFilter = () => {
    const { branch, label } = getFiltersValues();
    branch.value = attractionsFilterMenus.selectList[0].placeholder;
    label.value = attractionsFilterMenus.selectList[1].placeholder;
    callAttractionsServices(branch.value, label.value);
  };

  const clearFilters = () => {
    const { branch, label } = getFiltersValues();
    branch.value = attractionsFilterMenus.selectList[0].placeholder;
    label.value = attractionsFilterMenus.selectList[1].placeholder;
    getDefaultData();
  };

  return (
    <>
      <h1 className="page-title">Attractions page</h1>
      <div className="section-filter">
        <FilterMenu selectList={attractionsFilterMenus.selectList} />
        <button className="filter-btn" onClick={() => handleFilter()}>
          Filtrar atrações
        </button>
        <button className="filter-btn" onClick={() => clearFilters()}>
          Limpar Filtros
        </button>
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
