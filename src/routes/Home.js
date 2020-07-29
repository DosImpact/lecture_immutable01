import React from "react";

import { useDispatch, useSelector } from "react-redux";

function Home() {
  const counterStore = useSelector((state) => state.counterStore);

  // console.log(counterStore);
  // console.log(counterStore.toJS());
  // const { counters } = counterStore.toJS();
  // console.log(counters);
  const counters = counterStore.get("counters");
  console.log(counters);
  return (
    <>
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
