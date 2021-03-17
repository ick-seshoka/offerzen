import * as actions from "./actions/actionCreators";

export const setSearchFilterValue = (search) => async (dispatch) => {
  try {
    dispatch(actions.setSearchFilterValue(search));
  } catch (error) {
    console.log("something went wrong while searching");
  }
};

export const setArchivedStatus = (archived) => async (dispatch) => {
  try {
    dispatch(actions.setArchivedStatus(archived));
  } catch (error) {
    console.log("something went wrong while filtering archived status");
  }
};
