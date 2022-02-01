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

export const yearOptionsChart = {
  title: "Qtd. Reviews x Ano da Avaliação",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Quantidade de Reviews",
    minValue: 0,
  },
  vAxis: {
    title: "Ano da Avaliação",
  },
};

export const yearFilterMenus = {
  selectList: [
    {
      id: "year-selection",
      placeholder: "Selecione o ano desejado...",
      options: [
        {label: "2002", value: "2002"},
        {label: "2003", value: "2003"},
        {label: "2004", value: "2004"},
        {label: "2005", value: "2005"},
        {label: "2006", value: "2006"},
        {label: "2007", value: "2007"},
        {label: "2008", value: "2008"},
        {label: "2009", value: "2009"},
        {label: "2010", value: "2010"},
        {label: "2011", value: "2011"},
        {label: "2012", value: "2012"},
        {label: "2013", value: "2013"},
        {label: "2014", value: "2014"},
        {label: "2015", value: "2015"},
        {label: "2016", value: "2016"},
        {label: "2017", value: "2017"},
        {label: "2018", value: "2018"},
        {label: "2019", value: "2019"},
        {label: "2020", value: "2020"},
        {label: "2021", value: "2021"},
        {label: "2022", value: "2022"}
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

export const yearHeaders = ["Ano", "Reviews"];

export const frequenciesFilterMenus = {
  selectList: [
    {
      id: "label-selection",
      placeholder: "Selecione o tipo de avaliação desejada...",
      options: [
        {label: "Positiva", value: "positive"},
        {label: "Negativa", value: "negative"}
      ]
    }
  ],
  searchList: [
    {
      id: "top_freq_terms",
      placeholder: "Quantidade de termos a buscar..."
    }
  ]
};

export const frequenciesTableHeaders = ["Termo", "Frequência"];

export const attractionsOptionsChart = {
  title: "Qtd. Reviews x Atração",
  chartArea: { width: "70%" },
  hAxis: {
    title: "Atrações",
    minValue: 0,
  },
  vAxis: {
    title: "Quantidade de Reviews",
  },
};

export const attractionsFilterMenus = {
  selectList: [
    {
      id: "attractions-selection",
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
        {label: "Positiva", value: "pos"},
        {label: "Negativa", value: "neg"}
      ]
    }
  ]
};

export const attractionsHeaders = ["Reviews", "Atração"];

export const timeSeriesFilterMenus = {
  selectList: [
    {
      id: "timeseries-selection",
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
        {label: "Positiva", value: "pos"},
        {label: "Negativa", value: "neg"}
      ]
    }
  ]
};