import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../services/api";
import { timeSeriesFilterMenus } from "../constants";
import FilterMenu from "../components/FilterMenu";

export default function TimeSeriesPage(props) {
  const [src, setSrc] = useState("");
  const [detailsSrc, setDetailsSrc] = useState("");

  useEffect(() => {
    getDefaultData();
  }, []);

  const getDefaultData = async () => {
    const mainUrl = `/time_series/default`;
    const detailsUrl = `/time_series/default/details`;
    await Promise.all([api.get(mainUrl), api.get(detailsUrl)])
      .then(([timeSeries, timeSeriesDetails]) => {
        setImageSource(timeSeries.data.data, timeSeriesDetails.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setImageSource = (mainUrl, detailsUrl) => {
    setSrc(`data:image/jpeg;base64,${mainUrl}`);
    setDetailsSrc(`data:image/jpeg;base64,${detailsUrl}`);
  };

  const callTimeSeriesServices = async (chosenBranch, chosenLabel) => {
    const isBranchSelected =
      chosenBranch !== "" &&
      chosenBranch !== timeSeriesFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== timeSeriesFilterMenus.selectList[1].placeholder;

    if (isBranchSelected && isLabelSelected) {
      const mainUrl = `/time_series/${chosenBranch}_${chosenLabel}`;
      await Promise.all([api.get(mainUrl), api.get(`${mainUrl}/details`)])
        .then(([timeSeries, timeSeriesDetails]) => {
          setImageSource(timeSeries.data.data, timeSeriesDetails.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isBranchSelected && !isLabelSelected) {
      const mainUrl = `/time_series/${chosenBranch}`;
      await Promise.all([api.get(mainUrl), api.get(`${mainUrl}/details`)])
        .then(([timeSeries, timeSeriesDetails]) => {
          setImageSource(timeSeries.data.data, timeSeriesDetails.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isBranchSelected && isLabelSelected) {
      const mainUrl = `/time_series/default_${chosenLabel}`;
      await Promise.all([api.get(mainUrl), api.get(`${mainUrl}/details`)])
        .then(([timeSeries, timeSeriesDetails]) => {
          setImageSource(timeSeries.data.data, timeSeriesDetails.data.data);
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
      timeSeriesFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      timeSeriesFilterMenus.selectList[1].id
    );
    return { branch: branchElement, label: labelElement };
  };

  const handleFilter = () => {
    const { branch, label } = getFiltersValues();
    callTimeSeriesServices(branch.value, label.value);
  };

  const clearFilters = () => {
    const { branch, label } = getFiltersValues();
    branch.value = timeSeriesFilterMenus.selectList[0].placeholder;
    label.value = timeSeriesFilterMenus.selectList[1].placeholder;
    getDefaultData();
  };

  return (
    <>
      <h1 className="page-title">Análise de Séries Temporais</h1>
      <div className="section-filter">
        <FilterMenu selectList={timeSeriesFilterMenus.selectList} />
        <button className="filter-btn" onClick={() => handleFilter()}>
          Filtrar
        </button>
        <button className="filter-btn" onClick={() => clearFilters()}>
          Limpar filtros
        </button>
      </div>
      <div className='pre-charts'>
        {src && <img alt="time-series" src={src} />}
        <h3>Visão detalhada do filtro: </h3>
        {detailsSrc && <img alt="time-series-details" src={detailsSrc} />}
      </div>
    </>
  );
}
