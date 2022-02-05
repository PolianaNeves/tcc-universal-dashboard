import { DEFAULT_BRANCH } from '../constants';

export const parseDataToMultipleSeries = (headers, data) => {
    const newDataList = []
    newDataList.push(headers);
    const parsedData = data.map((element) => {
        return [element.label, element.total, element.positive, element.negative]
    });
    newDataList.push(...parsedData)
    return newDataList
}

export const parseDataToPosChart = (headers, data, isPositive) => {
    const newDataList = [];
    newDataList.push(headers);
    const filteredData = data.filter((obj) => obj.label !== DEFAULT_BRANCH && obj.label !== "full")
    const parsedData = filteredData.map((elem) => {
        if(isPositive)
            return [elem.label, elem.positive];
        else
            return [elem.label, elem.negative];
    });
    newDataList.push(...parsedData);
    return newDataList
}