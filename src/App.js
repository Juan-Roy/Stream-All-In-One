import React, { useState, useEffect, useContext } from "react";
import { ShowsProvider } from "./contexts/ShowsContext";
import Shows from "./components/Shows";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
const App = (props) => {
  return (
    <ShowsProvider>
      <React.Fragment>
        <Navbar />
        {/* <h1>Shows</h1>
        <Shows /> */}
        <Switch>
          <Route exact path="/" render={() => <Shows />} />
          <Route exact path="/movies" render={() => <Movies />} />
        </Switch>
      </React.Fragment>
    </ShowsProvider>
  );
};

export default App;
