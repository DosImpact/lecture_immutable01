import { countTypes } from "../_actions/types";
import { List, Map } from "immutable";

const initState = Map({
  counters: List([
    Map({
      color: "black",
      number: 0,
    }),
    Map({
      color: "green",
      number: 10,
    }),
  ]),
});

export default (state = initState, action) => {
  const counters = state.get("counters");
  let { number, index, color } = action?.payload || {};
  console.log("counter_reducer", index, number, color);
  switch (action.type) {
    case countTypes.COUNT_CREATE:
      return state.set("counters", counters.push(Map({ ...action.payload })));

    case countTypes.COUNT_DOWN:
      return state.updateIn(["counters", index, "number"], (prev) => prev - 1);

    case countTypes.COUNT_REMOVE:
      return state.deleteIn(["counters", index]);

    case countTypes.COUNT_SET_COLOR:
      return state.setIn(["counters", index, "color"], color);

    case countTypes.COUNT_UP:
      return state.updateIn(["counters", index, "number"], (prev) => prev + 1);
    default:
      // throw Error("No type Def in counter reducers");
      return state;
  }
};
