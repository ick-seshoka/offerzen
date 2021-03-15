import { combineReducers } from "redux";
import { interviewsReducer } from "./interviews";

const rootReducer = combineReducers({ interviews: interviewsReducer });

export default rootReducer;
