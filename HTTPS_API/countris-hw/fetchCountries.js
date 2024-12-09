import { alert, notice, info, success, error } from "@pnotify/core";
const inputEl = document.getElementById("country-input");
const countryInfoEl = document.getElementById("country-info");

const APIURL = "https://restcountries.com/v2/name/";

async function fetchCountryData(countryName) {
  try {
    const response = await fetch(`${APIURL}${countryName}`);
    if (!response.ok) throw new Error("Країну не знайдено");
    const countries = await response.json();
    return countries;
  } catch (error) {
    throw error;
  }
}

const renderCountryCard = (country) => {
  const { name, capital, population, languages, flag } = country;
  const languagesList = languages.map((lang) => lang.name).join(", ");

  return `
        <div class="country-card">
            <h2>${name}</h2>
            <img src="${flag}" alt="Прапор ${name}">
            <div class="country-details">
                <p><strong>Столиця:</strong> ${capital}</p>
                <p><strong>Населення:</strong> ${population.toLocaleString()}</p>
                <p><strong>Мови:</strong> ${languagesList}</p>
            </div>
        </div>
    `;
};

const renderCountryList = (countries) => {
  return `
        <ul class="country-list">
            ${countries.map((country) => `<li>${country.name}</li>`).join("")}
        </ul>
    `;
};

const onSearchInput = (event) => {
  const searchQuery = event.target.value.trim();
  if (!searchQuery) {
    countryInfoEl.innerHTML = "";
    return;
  }
  fetchCountryData(searchQuery)
    .then((countries) => {
      if (countries.length > 10) {
        info({
          text: "Занадто багато збігів. Введіть більш точну назву країни.",
          delay: 2000,
        });
        countryInfoEl.innerHTML = "";
        return;
      }

      if (countries.length >= 2 && countries.length <= 10) {
        countryInfoEl.innerHTML = renderCountryList(countries);
        return;
      }

      if (countries.length === 1) {
        countryInfoEl.innerHTML = renderCountryCard(countries[0]);
      }
    })
    .catch((err) => {
      error({
        text: "Країну не знайдено. Спробуйте іншу назву.",
        delay: 2000,
      });
      countryInfoEl.innerHTML = "";
    });
};

const debounceOnSearch = _.debounce(onSearchInput, 500);

inputEl.addEventListener("input", debounceOnSearch);
