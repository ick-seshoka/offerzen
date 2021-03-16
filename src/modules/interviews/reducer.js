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

    case actionTypes.SET_CANDIDATE_ARCHIVED_STATUS_ACTIVE: {
      const {
        payload: { id },
      } = action;
      const { candidateInterviews } = state;

      const interviews = candidateInterviews.map((candidate) => {
        if (candidate.id === id) {
          candidate.archived = true;
        }

        return candidate;
      });

      return { ...state, candidateInterviews: interviews };
    }

    case actionTypes.SET_CANDIDATE_ARCHIVED_STATUS_INACTIVE: {
      const {
        payload: { id },
      } = action;
      const { candidateInterviews } = state;

      const interviews = candidateInterviews.map((candidate) => {
        if (candidate.id === id) {
          candidate.archived = false;
        }

        return candidate;
      });

      return { ...state, candidateInterviews: interviews };
    }

    default:
      return state;
  }
};
