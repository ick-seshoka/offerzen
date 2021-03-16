import * as actions from "./actions/actionCreators";

export const setSearchFilterValue = (search) => async (dispatch) => {
  try {
    dispatch(actions.setSearchFilterValue(search));
  } catch (error) {
    console.log("something went wrong while searching");
  }
};
