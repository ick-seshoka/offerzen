import * as actionTypes from "./actions/actionTypes";

const initialState = {
  search: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_FILTER_VALUE: {
      const {
        payload: { search },
      } = action;

      return {
        ...state,
        search,
      };
    }

    default:
      return state;
  }
};
