export const parseDataChart = (header, data) => {
    const newDataList = []
    newDataList.push(header);
    const parsedData = data.map((element) => {
        return [element.label, element.value]
    });
    newDataList.push(...parsedData)
    return newDataList
}

export const parseDataToMultipleSeries = (headers, data) => {
    const newDataList = []
    newDataList.push(headers);
    const parsedData = data.map((element) => {
        return [element.label, element.total, element.positive, element.negative]
    });
    newDataList.push(...parsedData)
    return newDataList
}