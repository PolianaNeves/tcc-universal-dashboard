import React, { useEffect, useState } from "react";
import FilterMenu from "../components/FilterMenu";
import Table from "../components/Table";
import { frequenciesFilterMenus, frequenciesTableHeaders } from "../constants";
import api from "../services/api";

export default function FrequenciesPage(props) {
  const [tableData, setTableData] = useState(null);

  const getDefaultData = async () => {
    await api
      .get("/top/20/all/terms")
      .then((response) => {
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (tableData == null) {
      getDefaultData();
    }
  }, [tableData]);

  const callFrequenciesServices = async (chosenTop, chosenLabel) => {
    const isTopSelected =
      chosenTop !== "" &&
      chosenTop !== frequenciesFilterMenus.searchList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== frequenciesFilterMenus.selectList[0].placeholder;

    if (isTopSelected && isLabelSelected) {
      await api
        .get(`/top/${chosenTop}/${chosenLabel}/terms`)
        .then((response) => {
          setTableData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isTopSelected && !isLabelSelected) {
      await api
        .get(`/top/${chosenTop}/all/terms`)
        .then((response) => {
          setTableData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isTopSelected && isLabelSelected){
      await api
        .get(`/top/10/${chosenLabel}/terms`)
        .then((response) => {
          setTableData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDefaultData();
    }
  };

  const handleFilter = () => {
    var topElement = document.getElementById(
      frequenciesFilterMenus.searchList[0].id
    );
    var labelElement = document.getElementById(
      frequenciesFilterMenus.selectList[0].id
    );
    callFrequenciesServices(topElement.value, labelElement.value);
  };

  const clearFilters = () => {
    var topElement = document.getElementById(
      frequenciesFilterMenus.searchList[0].id
    );
    var labelElement = document.getElementById(
      frequenciesFilterMenus.selectList[0].id
    );
    topElement.value = ""
    labelElement.value = frequenciesFilterMenus.selectList[0].placeholder
    getDefaultData()
  }

  return (
    <>
      <h1 className="page-title">Análise por Frequência</h1>
      <div className='section-filter'>
        <FilterMenu
          selectList={frequenciesFilterMenus.selectList}
          searchList={frequenciesFilterMenus.searchList}
        />
        <button className='filter-btn' onClick={() => handleFilter()}>Filtrar termos</button>
        <button className='filter-btn' onClick={() => clearFilters()}>Limpar Filtros</button>
      </div>

      <Table headers={frequenciesTableHeaders} rows={tableData} />
    </>
  );
}
