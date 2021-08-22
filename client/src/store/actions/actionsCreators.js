import {
  FETCH_DATA_REQ,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return {
    type: FETCH_DATA_REQ,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (err) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: err,
  };
};

export const fetchLeaderboard = (page = 1, sort = "asc", sortOn = "Rank") => {
  return (dispatch) => {
    dispatch(fetchData);
    axios
      .get(
        `http://localhost:4000/api/leaderboard?page=${page}&sortBy=${sort}&sortOn=${sortOn}`
      )
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDataError(err.message));
      });
  };
};
