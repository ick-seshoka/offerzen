import * as actions from "./actionTypes";

export const getCandidateInterviews = () => {
  return { type: actions.GET_CANDIDATE_INTERVIEWS };
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
