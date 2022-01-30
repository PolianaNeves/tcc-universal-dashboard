export const parseDataChart = (header, data) => {
    const newDataList = []
    newDataList.push(header);
    const parsedData = data.map((element) => {
        return [element.label, element.value]
    });
    newDataList.push(...parsedData)
    return newDataList
}