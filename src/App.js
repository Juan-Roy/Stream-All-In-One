import React, { useState, useEffect, useContext } from "react";
import { ShowsProvider } from "./contexts/ShowsContext";
import Shows from "./components/Shows";

const App = (props) => {
  return (
    <ShowsProvider>
      <React.Fragment>
        <h1>Shows</h1>
        <Shows />
      </React.Fragment>
    </ShowsProvider>
  );
};

export default App;
