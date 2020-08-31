import React, { useContext } from "react";
import Child from "./Child";
import { DataContext } from "../contexts/TestContext";

const Parent = (props) => {
  const { state } = useContext(DataContext);
  return (
    <div>
      <h1>Parent: {state}</h1>
      <Child p1={props.p1} />
    </div>
  );
};

export default Parent;
