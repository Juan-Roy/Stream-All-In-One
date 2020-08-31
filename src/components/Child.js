import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  return (
    <div>
      <h1>Child: {props.p1}</h1>
      <GrandChild p1={props.p1} />
    </div>
  );
};

export default Child;
