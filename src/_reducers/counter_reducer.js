import { countTypes } from "../_actions/types";
import { List, Map, Record } from "immutable";

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

  switch (action.type) {
    case countTypes.COUNT_CREATE:
      const { color = "white", number = 0 } = action.payload;
      counters.push(Map({ color, number }));
      return state.update("counters", counters);
    case countTypes.COUNT_DOWN:
      return [...state];
    case countTypes.COUNT_REMOVE:
      return [...state];
    case countTypes.COUNT_SET_COLOR:
      return [...state];
    case countTypes.COUNT_UP:
      return [...state];
    default:
      // throw Error("No type Def in counter reducers");
      return state;
  }
};
