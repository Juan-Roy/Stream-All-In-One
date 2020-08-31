import React, { useContext } from "react";
import { DataContext } from "../contexts/TestContext";

const GrandChild = (props) => {
  const { state } = useContext(DataContext);
  return (
    <div>
      <h1>GrandChild: {state}</h1>
    </div>
  );
};

export default GrandChild;
