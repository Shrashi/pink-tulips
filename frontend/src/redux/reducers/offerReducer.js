import { ACTION_TYPES } from "../../utils/constants";
import initialState from "../initialState/offerInitialState";
const { GET_LATEST_OFFERS } = ACTION_TYPES;
const offerReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_LATEST_OFFERS:
      {
        newState.list = action.payload.list;
        return newState;
      }
      break;
    default:
      return newState;
      break;
  }
  return newState;
};

export default offerReducer;
