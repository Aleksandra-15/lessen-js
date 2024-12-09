import { countries } from "./list.js";
import Handlebars from "handlebars"
import templateSource  from "../src/templates/menu.hbs";
// const templateCountries = Handlebars.compile(templateSource())
// console.log(templateCountries());
// console.log(templateSource);
// const countriesContainer = document.querySelector('#countriesContainer').innerHTML
// countriesContainer.innerHTML = templateCountries(countries)
// document.body.innerHTML = templateCountries(countries)
// const renderedHtml = countries.map(country => {//     console.log(templateSource(country));
//     return templateSource(country);// });
const renderedHtml = templateSource({countries})

document.body.innerHTML = renderedHtml