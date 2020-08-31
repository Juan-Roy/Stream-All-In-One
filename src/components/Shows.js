import React, { useEffect, useContext } from "react";
import { ShowsContext, ShowsProvider } from "../contexts/ShowsContext";

const Shows = () => {
  const { trending, trendingRequest } = useContext(ShowsContext);

  useEffect(() => {
    trendingRequest();
  }, []);

  console.log("line 11", trending);
  return (
    <React.Fragment>
      <ul>
        {trending.map((show) => {
          return <li>{show.show.title}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Shows;
