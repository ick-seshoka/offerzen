import * as actionTypes from "./actions/actionTypes";

const initialState = {
  candidateInterviews: [],
  loading: true,
  error: null,
};

export const interviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CANDIDATE_INTERVIEWS: {
      const {
        payload: { interviews },
      } = action;

      return { ...state, candidateInterviews: interviews };
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

    case actionTypes.SET_CANDIDATE_INTERVIEWS_LOADING: {
      const {
        payload: { loading },
      } = action;

      return {
        ...state,
        loading,
      };
    }

    case actionTypes.SET_CANDIDATE_ARCHIVED_STATUS_ERROR: {
      const {
        payload: { error },
      } = action;

      return {
        ...state,
        error: error,
      };
    }

    default:
      return state;
  }
};
