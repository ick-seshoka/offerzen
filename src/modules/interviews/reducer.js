import * as actionTypes from "./actions/actionTypes";

import { interviews } from "./data";

const initialState = {
  candidateInterviews: interviews,
};

export const interviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CANDIDATE_INTERVIEWS: {
      const {
        payload: { interviews },
      } = action;

      return { ...state, interviews };
    }

    default:
      return state;
  }
};
