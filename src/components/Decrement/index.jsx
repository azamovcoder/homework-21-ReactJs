import "../../scss/app.scss";

import React, { useEffect, useState } from "react";
import { decrement, increment, reset } from "../../context/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import { FaMinus } from "react-icons/fa";

const Hero = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [inputValue, setInputValue] = useState("");
  const [inputDecValue, setInputDecValue] = useState("");

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const handleDecChange = (event) => {
    setInputDecValue(event.target.value);
  };

  const handleDecrement = () => {
    const value = inputDecValue === "" ? 1 : Number(inputDecValue);
    dispatch(decrement(value));
  };

  const isDecrementDisabled = () => {
    const decValue = inputDecValue === "" ? 1 : Number(inputDecValue);
    return decValue > count || count <= 0;
  };

  return (
    <div className="count__frame__info__input">
      <input
        placeholder="Decrement"
        type="number"
        value={inputDecValue}
        onChange={handleDecChange}
      />
      <button
        className="count__frame__dec-btn"
        onClick={handleDecrement}
        disabled={isDecrementDisabled()}
      >
        <FaMinus />
      </button>
    </div>
  );
};

export default Hero;
