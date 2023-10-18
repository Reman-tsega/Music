import { combineReducers } from "redux";

import musicReducer from "./reducer";

const rootReducer = combineReducers({
  data: musicReducer,
});

export default rootReducer;
