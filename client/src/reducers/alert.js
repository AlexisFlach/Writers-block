// "Just a function that takes in a piece of state and an action"
// "an action is gonna get dispatched from an actions file"

// "we dispatch the ex SET_ALERT and return a payload, with the new alert"
// REmove kör filter där dess nya state är samtliga alerts förutom den alert som matcher dess payload

import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
