import { countTypes } from "./types";

export const countDown = (payload) => {
  return {
    type: countTypes.COUNT_DOWN,
    payload,
  };
};

export const countUp = (payload) => {
  return {
    type: countTypes.COUNT_UP,
    payload,
  };
};
export const countCreate = (payload) => {
  return {
    type: countTypes.COUNT_CREATE,
    payload,
  };
};
export const countRemove = (payload) => {
  return {
    type: countTypes.COUNT_REMOVE,
    payload,
  };
};
export const countSetColor = (payload) => {
  return {
    type: countTypes.COUNT_SET_COLOR,
    payload,
  };
};
