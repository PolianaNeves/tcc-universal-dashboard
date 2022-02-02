import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import {
  branchOptionsChart,
  branchFilterMenus,
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

  const callBranchServices = async (chosenBranch, chosenLabel) => {
    const isBranchSelected =
      chosenBranch !== "" &&
      chosenBranch !== branchFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== branchFilterMenus.selectList[1].placeholder;

    if (isBranchSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/branch/${chosenBranch}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isBranchSelected && !isLabelSelected) {
      await api
        .get(`/count/by/branch/${chosenBranch}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isBranchSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/branch`)
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
    var branchElement = document.getElementById(
      branchFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      branchFilterMenus.selectList[1].id
    );
    callBranchServices(
      branchElement.options[branchElement.selectedIndex].text,
      labelElement.value
    );
  };

  return (
    <section className="branch-section">
      <h1 className="branch-page-title">Branch page</h1>
      <div className="branch-filter">
        <FilterMenu selectList={branchFilterMenus.selectList} />
        <button className="btn-branch" onClick={() => handleFilter()}>
          Filtrar por filial
        </button>
        <button className="btn-branch" onClick={() => getDefaultData()}>
          Limpar Filtros
        </button>
      </div>
      {chartData && (
        <div className='branch-chart'>
          <BarChart
            data={chartData}
            options={branchOptionsChart}
            headers={branchHeaders}
          />
        </div>
      )}
    </section>
  );
}
