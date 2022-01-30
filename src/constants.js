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


export const ratingsOptionsChart = {
  title: "Qtd. Reviews x Pontuação da Avaliação",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Quantidade de Reviews",
    minValue: 0,
  },
  vAxis: {
    title: "Pontuação da Avaliação",
  },
};

export const ratingsFilterMenus = {
  selectList: [
    {
      id: "rating-selection",
      placeholder: "Selecione a pontuação desejada...",
      options: [
        {label: "1 estrela", value: "1"},
        {label: "2 estrelas", value: "2"},
        {label: "3 estrelas", value: "3"},
        {label: "4 estrelas", value: "4"},
        {label: "5 estrelas", value: "5"}
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

export const ratingsHeaders = ["Pontuação", "Reviews"];