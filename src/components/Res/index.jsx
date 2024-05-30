import "../../scss/app.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { VscDebugRestart } from "react-icons/vsc";
import { reset } from "../../context/slice/counterSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="count__frame__info__input">
      <button
        className="count__frame__res-btn"
        disabled={count <= 0}
        onClick={() => dispatch(reset())}
      >
        <VscDebugRestart />
      </button>
    </div>
  );
};

export default Hero;
