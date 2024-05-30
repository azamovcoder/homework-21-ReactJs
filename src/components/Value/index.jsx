import "../../scss/app.scss";

import React from "react";
import { useSelector } from "react-redux";

const Value = () => {
  let count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div className="count__frame__value">
        <h2>{count}</h2>
      </div>
    </div>
  );
};

export default Value;
