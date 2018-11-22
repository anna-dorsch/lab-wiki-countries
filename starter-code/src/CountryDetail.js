import React from "react";
import { NavLink } from "react-router-dom";
import countries from "./countries.json";

const CountryDetail = props => {
  console.log("hello", props);

  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countries.find(theCountry);
  };

  const foundCountry = getCountry(props.match.params.cca3);
  console.log("foundCountry", foundCountry);

  let testCountries = foundCountry.borders.map(getCountry);

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <h2>Capital: {foundCountry.capital}</h2>
      <h2>Area: {foundCountry.area} km</h2>
      <h3>
        Borders:{" "}
        <ul className="list-group">
          {testCountries.map(country => (
            <li>
              <NavLink
                className="list-group-item list-group-item-action"
                to={"/" + country.cca3}
              >
                {country.name.common}
              </NavLink>
            </li>
          ))}
        </ul>
      </h3>
    </div>
  );
};

export default CountryDetail;
