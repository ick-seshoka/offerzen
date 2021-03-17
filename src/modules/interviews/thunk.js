import { axios } from "@helpers/axios";

import * as actions from "./actions/actionCreators";
import { candidateInterviewsConfig } from "@api";

export const setCandidateArchivedStatusActive = (id) => async (dispatch) => {
  try {
    dispatch(actions.setCandidateArcivedStatusActive(id));
  } catch (error) {
    console.log(
      `something went wrong archicing/unachiving candidate with id ${id}`
    );
  }
};

export const setCandidateArchivedStatusInactive = (id) => async (dispatch) => {
  try {
    dispatch(actions.setCandidateArcivedStatusInactive(id));
  } catch (error) {
    console.log(
      `something went wrong archicing/unachiving candidate with id ${id}`
    );
  }
};

export const fetchCandidateInterviews = () => async (dispatch) => {
  try {
    const { data } = await axios(candidateInterviewsConfig);
    dispatch(actions.setCandidateInterviews(data));
  } catch (error) {
    dispatch(actions.setCandidateInterviewsError(error));
    console.log("something went wrong fetching candidate interviews");
  } finally {
    dispatch(actions.setCandidateInterviewsLoading(false));
  }
};
