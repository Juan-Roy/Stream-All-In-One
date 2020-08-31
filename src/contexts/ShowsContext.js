import React, { useState, createContext } from "react";
import axios from "axios";

export const ShowsContext = createContext();

export const ShowsProvider = (props) => {
  const [trending, setTrending] = useState([]);

  const trendingRequest = async () => {
    let res = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.trakt.tv/shows/trending",
      {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-version": "2",
          "trakt-api-key": process.env.REACT_APP_TRAKT_KEY,
        },
      }
    );

    console.log("axios request", res.data);
    setTrending(res.data);
  };

  return (
    <ShowsContext.Provider value={{ trending, setTrending, trendingRequest }}>
      {props.children}
    </ShowsContext.Provider>
  );
};
