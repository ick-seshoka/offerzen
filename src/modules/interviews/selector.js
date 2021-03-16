import { createSelector } from "reselect";

import { getFilterSearch, getArchivedStatus } from "@modules/filter";

export const getCandidateInterviews = (state) =>
  state.interviews?.candidateInterviews;

export const getCandidateInterviewsWithArchivedStatus = createSelector(
  getCandidateInterviews,
  getArchivedStatus,
  (interviews, archived) => {
    if (!archived) {
      return interviews.filter(({ archived }) => !archived);
    }
    return interviews;
  }
);

export const getFilteredCandidateInterviews = createSelector(
  getCandidateInterviewsWithArchivedStatus,
  getFilterSearch,
  (interviews, search) => {
    if (search !== "") {
      return interviews.filter(
        ({ candidate }) =>
          candidate.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    }
    return interviews;
  }
);

export const getCandidatesCount = (state) =>
  state.interviews?.candidateInterviews?.length;
