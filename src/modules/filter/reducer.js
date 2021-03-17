import * as actionTypes from "./actions/actionTypes";

const initialState = {
  search: "",
  archived: false,
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

    case actionTypes.SET_ARCHIVED_STATUS: {
      const {
        payload: { archived },
      } = action;

      return {
        ...state,
        archived,
      };
    }

    default:
      return state;
  }
};
