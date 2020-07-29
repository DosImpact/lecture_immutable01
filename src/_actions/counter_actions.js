import { countTypes } from "./types";

export const countDown = (index) => {
  return {
    type: countTypes.COUNT_DOWN,
    payload: { index },
  };
};

export const countUp = (index) => {
  return {
    type: countTypes.COUNT_UP,
    payload: { index },
  };
};
export const countCreate = (color = "white", number = 0) => {
  return {
    type: countTypes.COUNT_CREATE,
    payload: { color, number: Number(number) },
  };
};
export const countRemove = (index) => {
  return {
    type: countTypes.COUNT_REMOVE,
    payload: { index },
  };
};
export const countSetColor = (index, color) => {
  // console.log("countSetColor_action", index, color);
  return {
    type: countTypes.COUNT_SET_COLOR,
    payload: { index, color },
  };
};
