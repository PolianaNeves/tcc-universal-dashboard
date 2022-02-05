export const parseDataToMultipleSeries = (headers, data) => {
    const newDataList = []
    newDataList.push(headers);
    const parsedData = data.map((element) => {
        return [element.label, element.total, element.positive, element.negative]
    });
    newDataList.push(...parsedData)
    return newDataList
}
