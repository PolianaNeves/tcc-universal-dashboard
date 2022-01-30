export const branchOptionsChart = {
  title: "Qtd. Reviews x Filial",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Quantidade de Reviews",
    minValue: 0,
  },
  vAxis: {
    title: "Filiais",
  },
};

export const branchFilterMenus = {
  selectList: [
    {
      id: "branch-selection",
      placeholder: "Selecione a filial desejada...",
      options: [
        {label: "Universal Studios Florida", value: "florida"},
        {label: "Universal Studios Singapore", value: "singapore"},
        {label: "Universal Studios Japan", value: "japan"}
      ]
    },
    {
      id: "label-selection",
      placeholder: "Selecione o tipo de avaliação desejada...",
      options: [
        {label: "Positiva", value: "positive"},
        {label: "Negativa", value: "negative"}
      ]
    }
  ]
};

export const branchHeaders = ["Branches", "Reviews"];