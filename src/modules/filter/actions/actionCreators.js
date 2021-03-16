import * as actionTypes from "./actionTypes";

export const setSearchFilterValue = (value) => {
  return {
    type: actionTypes.SET_SEARCH_FILTER_VALUE,
    payload: { search: value },
  };
};

export const setArchivedStatus = (archived) => {
  return { type: actionTypes.SET_ARCHIVED_STATUS, payload: { archived } };
};
