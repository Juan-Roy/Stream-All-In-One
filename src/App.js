import React, { Component } from "react";
import axios from "axios";

console.log(process.env, process.env.REACT_APP_TRAKT_KEY);

class App extends Component {
  async componentDidMount() {
    console.log(`let's goooo`);
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
    console.log(res);
  }
  render() {
    return <div></div>;
  }
}

export default App;
