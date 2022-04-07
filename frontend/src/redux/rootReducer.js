import { combineReducers } from "redux";
import offerReducer from "./reducers/offerReducer";

const rootReducer = combineReducers({ offers: offerReducer });
export default rootReducer;
