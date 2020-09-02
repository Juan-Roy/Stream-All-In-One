import React, { useEffect, useContext } from "react";
import { ShowsContext, ShowsProvider } from "../contexts/ShowsContext";
import "./styles/Shows.scss";
const Shows = () => {
  const { trending, trendingRequest } = useContext(ShowsContext);

  useEffect(() => {
    trendingRequest();
  }, []);

  const displayTrendingShows = () => {
    return trending.map((show) => {
      return (
        <div className="card" key={show.show.ids.imdb}>
          <h1>{show.show.title}</h1>

          <button>Thumbs up</button>

          <button>Thumbs Down </button>
        </div>
      );
    });
  };
  console.log("line 11", trending);
  return (
    <React.Fragment>
      <h3>Trending</h3>
      <section className="trending-shows">{displayTrendingShows()}</section>
    </React.Fragment>
  );
};

export default Shows;
