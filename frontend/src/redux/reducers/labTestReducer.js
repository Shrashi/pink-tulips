import { ACTION_TYPES } from "../../utils/constants";
import initialState from "../initialState/labTestInitialState";

const { GET_LAB_TESTS } = ACTION_TYPES;
const labTestReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_LAB_TESTS:
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

export default labTestReducer;
