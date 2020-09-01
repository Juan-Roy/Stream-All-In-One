import React, { useEffect, useContext } from "react";
import { ShowsContext, ShowsProvider } from "../contexts/ShowsContext";

const Shows = () => {
  const { trending, trendingRequest } = useContext(ShowsContext);

  useEffect(() => {
    trendingRequest();
  }, []);

  const displayTrendingShows = () => {
    return trending.map((show) => {
      return <li key={show.show.ids.imdb}>{show.show.title}</li>;
    });
  };
  console.log("line 11", trending);
  return (
    <React.Fragment>
      <h3>Trending</h3>
      <ul>{displayTrendingShows()}</ul>
    </React.Fragment>
  );
};

export default Shows;
