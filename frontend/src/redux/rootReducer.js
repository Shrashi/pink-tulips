import { combineReducers } from "redux";
import labTestReducer from "./reducers/labTestReducer";
import offerReducer from "./reducers/offerReducer";

const rootReducer = combineReducers({
  offers: offerReducer,
  labTests: labTestReducer,
});
export default rootReducer;
