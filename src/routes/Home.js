import React, { useState } from "react";
import {
  countCreate,
  countDown,
  countRemove,
  countSetColor,
  countUp,
} from "../_actions/counter_actions";

import { useDispatch, useSelector } from "react-redux";

const Counter = () => {};
const CounterList = () => {};

function Home() {
  const dispatch = useDispatch();
  const counterStore = useSelector((state) => state.counterStore);
  const counters = counterStore.get("counters");

  const counterUp = (index) => dispatch(counterUp({ index }));

  const [color, setColor] = useState("Pink");
  const [num, setNum] = useState("10");

  const handleSumit = (e) => {
    e.preventDefault();
    if (color !== "" && num !== "") {
      dispatch(countCreate({ color, number: num }));
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
            <li key={i}>
              {number} | {color}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
