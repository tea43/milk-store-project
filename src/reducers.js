import {
  CHANGE_SEARCH_FIELD,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchData = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateData = {
  isPending: false,
  Data: [],
  error: ''
}

export const requestData = (state = initialStateData, action = {}) => {
  switch (action.type) {
    case REQUEST_DATA_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_DATA_SUCCESS:
      return Object.assign({}, state, {
        Data: action.payload,
        isPending: false
      });
    case REQUEST_DATA_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      });
    default:
      return state;
  }
};
