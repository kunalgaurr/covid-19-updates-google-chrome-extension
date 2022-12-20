const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e0f2b7102amshaa1596575ea8f03p17ea7fjsnf3f5f9109382',
    'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
  },
};

const getData = (country) => {
  countryName.innerHTML = country;

  const checking = (country) => {
    return country.charAt(0) === String(country.charAt(0)).toLowerCase();
  };

  if (checking(country) === true) {
    var capital = country.charAt(0).toUpperCase() + country.slice(1);
    // storing the value of capital in country
    country = capital;
  } else {
    console.log('Proceed as normal');
  }

  fetch(
    'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=' +
      country,
    options
  )
    .then((response) => response.json())

    .then((response) => {
      console.log(response);

      console.log(response.data);

      recovered.innerHTML = response.data.recovered;
      deaths.innerHTML = response.data.deaths;
      confirmed.innerHTML = response.data.confirmed;
      lastChecked.innerHTML = response.data.lastChecked;
      lastReported.innerHTML = response.data.lastReported;
    })

    .catch((err) => console.error(err));

  console.log(country.charAt(0));
  console.log(checking(country));
  console.log(capital);
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getData(country.value);
});
