import * as actions from "./actions/actionCreators";

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
