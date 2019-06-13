import {
  CHANGE_SEARCH_FIELD,
  REQUEST_DATA_PENDING,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_FAILED
} from "./constants";

export const setSearchFiled = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestData = () => dispatch => {
  dispatch({ type: REQUEST_DATA_PENDING });
  fetch("https://my-json-server.typicode.com/tea43/milk-store-project/posts")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_DATA_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_DATA_FAILED, payload: error }));
};
