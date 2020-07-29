import { countTypes } from "../_actions/types";
import { List, Map, Record } from "immutable";

const initState = Map({
  counters: List([
    Map({
      color: "black",
      number: 0,
    }),
  ]),
});

export default (state = initState, action) => {
  const counters = state.get("counters");

  switch (action.type) {
    case countTypes.COUNT_DOWN:
      return [...state];
    case countTypes.COUNT_UP:
      return [...state];
    default:
      return state;
  }
};
