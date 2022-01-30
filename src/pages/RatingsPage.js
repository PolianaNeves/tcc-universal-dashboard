import React, { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import FilterMenu from "../components/FilterMenu";
import { ratingsOptionsChart, ratingsFilterMenus, ratingsHeaders } from "../constants";
import api from "../services/api";

export default function RatingsPage(props) {
  const [chartData, setChartData] = useState(null);

  const getDefaultData = async () => {
    await api
      .get("/count/by/ratings")
      .then((response) => {
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    if(chartData == null){
      getDefaultData();
    }
  }, [chartData])

  const callRatingsServices = async (chosenRating, chosenLabel) => {
    const isRatingSelected =
      chosenRating !== "" &&
      chosenRating !== ratingsFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== ratingsFilterMenus.selectList[1].placeholder;

    if (isRatingSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/ratings/${chosenRating}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isRatingSelected && !isLabelSelected) {
      await api
        .get(`/count/by/ratings/${chosenRating}`)
        .then((response) => {
          setChartData([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isRatingSelected && isLabelSelected) {
      await api
        .get(`/${chosenLabel}/count/by/ratings`)
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
    var ratingsElement = document.getElementById(
      ratingsFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      ratingsFilterMenus.selectList[1].id
    );
    callRatingsServices(
      ratingsElement.value,
      labelElement.value
    );
  };

  return (
    <>
      <h1>Ratings page</h1>
      <FilterMenu selectList={ratingsFilterMenus.selectList} />
      <button onClick={() => handleFilter()}>Filtrar por Pontuação</button>
      <button onClick={() => getDefaultData()}>Limpar Filtros</button>
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
