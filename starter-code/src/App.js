import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./App.css";
import CountryDetail from "./CountryDetail";
import countries from "./countries.json";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>WikiCountries</p>
        </header>
        {/* <CountryDetail /> */}
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries.map(country => (
                <NavLink
                  key={country.name.common}
                  className="list-group-item list-group-item-action"
                  exact
                  to={`/${country.cca3}`}
                >
                  {country.flag} {country.name.common}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-7">
            <Route path="/:cca3" component={CountryDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
