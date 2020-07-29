import React, { useState } from "react";
import {
  countCreate,
  countDown,
  countRemove,
  countSetColor,
  countUp,
} from "../_actions/counter_actions";

import { useDispatch, useSelector } from "react-redux";

const Counter = ({
  className,
  children,
  number,
  color,
  CountUp,
  CountDown,
  CountRemove,
  CountSetColor,
  index,
}) => {
  const [nextColor, setNextColor] = useState("");
  const changeColor = (e) => {
    console.log("changeColor");
    e.preventDefault();
    if (nextColor) {
      CountSetColor(index, nextColor);
      setNextColor("");
    }
  };
  return (
    <li>
      <div>
        {color} | {number}
        <button onClick={() => CountDown(index)}>-</button>
        <button onClick={() => CountUp(index)}>+</button>
        <button onClick={() => CountRemove(index)}>REMOVE</button>
        <input
          value={nextColor}
          onChange={(e) => setNextColor(e.target.value)}
          type="text"
          onKeyPress={(e) => (e.key === "Enter" ? changeColor(e) : null)}
        ></input>
        {children}
      </div>
    </li>
  );
};

function Home() {
  const dispatch = useDispatch();
  const counterStore = useSelector((state) => state.counterStore);
  const counters = counterStore.get("counters");

  const CountUp = (index) => dispatch(countUp(index));
  const CountDown = (index) => dispatch(countDown(index));
  const CountRemove = (index) => dispatch(countRemove(index));
  const CountSetColor = (index, color) => dispatch(countSetColor(index, color));

  const [color, setColor] = useState("Pink");
  const [num, setNum] = useState("10");

  const handleSumit = (e) => {
    e.preventDefault();
    if (color !== "" && num !== "") {
      dispatch(countCreate(color, Number(num)));
    }
    setColor("");
    setNum("");
  };
  return (
    <>
      <form onSubmit={handleSumit}>
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="color"
        ></input>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          placeholder="initnum"
        ></input>
        <button type="submit">ADD TODO</button>
      </form>
      <h1>Counter Store Test</h1>
      <ul>
        {counters.map((e, i) => {
          const { number, color } = e.toJS();
          return (
            <Counter
              CountUp={CountUp}
              CountDown={CountDown}
              CountRemove={CountRemove}
              CountSetColor={CountSetColor}
              key={i}
              index={i}
              number={number}
              color={color}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Home;
