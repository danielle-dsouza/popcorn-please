import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import nomReducer from "./nomReducer";

export default combineReducers({
  search: searchReducer,
  nominations: nomReducer,
});
