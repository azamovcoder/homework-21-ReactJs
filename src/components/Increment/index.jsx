import "../../scss/app.scss";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPlus } from "react-icons/fa6";
import { increment } from "../../context/slice/counterSlice";

const Increment = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "" || Number(value) >= 0) {
      setInputValue(value);
    }
  };

  const handleIncrement = () => {
    const value = inputValue === "" ? 1 : Math.max(Number(inputValue), 0);
    dispatch(increment(value));
  };

  return (
    <div>
      <div className="count__frame__info__input">
        <input
          placeholder="Increment"
          type="number"
          value={inputValue}
          onChange={handleChange}
          min="0"
        />
        <button className="count__frame__inc-btn" onClick={handleIncrement}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Increment;
