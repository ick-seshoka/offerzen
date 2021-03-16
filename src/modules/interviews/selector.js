import { createSelector } from "reselect";

import { getFilterSearch } from "@modules/filter";

export const getCandidateInterviews = (state) =>
  state.interviews?.candidateInterviews;

export const getFilteredCandidateInterviews = createSelector(
  getCandidateInterviews,
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
