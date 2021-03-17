import * as actions from "./actionTypes";

export const getCandidateInterviews = () => {
  return { type: actions.GET_CANDIDATE_INTERVIEWS };
};

export const setCandidateInterviews = (interviews) => {
  return { type: actions.SET_CANDIDATE_INTERVIEWS, payload: { interviews } };
};

export const setCandidateInterviewsLoading = (loading) => {
  return {
    type: actions.SET_CANDIDATE_INTERVIEWS_LOADING,
    payload: { loading },
  };
};

export const setCandidateArcivedStatusActive = (id) => {
  return {
    type: actions.SET_CANDIDATE_ARCHIVED_STATUS_ACTIVE,
    payload: { id },
  };
};

export const setCandidateArcivedStatusInactive = (id) => {
  return {
    type: actions.SET_CANDIDATE_ARCHIVED_STATUS_INACTIVE,
    payload: { id },
  };
};
export const setCandidateInterviewsError = (error) => {
  return {
    type: actions.SET_CANDIDATE_ARCHIVED_STATUS_ERROR,
    payload: { error },
  };
};
