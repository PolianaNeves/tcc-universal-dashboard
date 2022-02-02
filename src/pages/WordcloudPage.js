import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import FilterMenu from "../components/FilterMenu";
import { wordcloudFilterMenus } from "../constants";
import api from "../services/api";

export default function WordcloudPage() {
  const [src, setSrc] = useState("");

  const setImageSource = (url) => {
    setSrc(`data:image/jpeg;base64,${url}`);
  };

  const getDefaultData = async () => {
    await api
      .get(`/wordcloud/default/top/terms`)
      .then((response) => {
        setImageSource(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDefaultData();
  }, []);

  const getFiltersValues = () => {
    var branchElement = document.getElementById(
      wordcloudFilterMenus.selectList[0].id
    );
    var labelElement = document.getElementById(
      wordcloudFilterMenus.selectList[1].id
    );
    return { branch: branchElement, label: labelElement };
  };

  const handleFilter = () => {
    const { branch, label } = getFiltersValues();
    callWordcloudServices(branch.value, label.value);
  };

  const clearFilters = () => {
    const { branch, label } = getFiltersValues();
    branch.value = wordcloudFilterMenus.selectList[0].placeholder;
    label.value = wordcloudFilterMenus.selectList[1].placeholder;
    getDefaultData();
  };

  const callWordcloudServices = async (chosenBranch, chosenLabel) => {
    const isBranchSelected =
      chosenBranch !== "" &&
      chosenBranch !== wordcloudFilterMenus.selectList[0].placeholder;
    const isLabelSelected =
      chosenLabel !== "" &&
      chosenLabel !== wordcloudFilterMenus.selectList[1].placeholder;

    if (isBranchSelected && isLabelSelected) {
      await api
        .get(`/wordcloud/${chosenBranch}_${chosenLabel}/top/terms`)
        .then((response) => {
          setImageSource(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (isBranchSelected && !isLabelSelected) {
      await api
        .get(`/wordcloud/${chosenBranch}/top/terms`)
        .then((response) => {
          setImageSource(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (!isBranchSelected && isLabelSelected) {
      await api
        .get(`/wordcloud/default_${chosenLabel}/top/terms`)
        .then((response) => {
          setImageSource(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDefaultData();
    }
  };

  return (
    <>
      <h1 className="page-title">WordcloudPage</h1>
      <div className='section-filter'>
        <FilterMenu selectList={wordcloudFilterMenus.selectList} />
        <button className='filter-btn' onClick={() => handleFilter()}>Filtrar</button>
        <button className='filter-btn' onClick={() => clearFilters()}>Limpar filtros</button>
      </div>
      {src && <img alt="nuvem-de-palavras" src={src} />}
    </>
  );
}
