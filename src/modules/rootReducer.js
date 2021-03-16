import { combineReducers } from "redux";
import { interviewsReducer } from "./interviews";
import { filterReducer } from "./filter";

const rootReducer = combineReducers({
  interviews: interviewsReducer,
  filter: filterReducer,
});

export default rootReducer;
