import { FETCH_ENTRYS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ENTRYS:
      return action.payload;
    default:
      return state;
  }
}
