import {
  FETCH_DATA_REQ,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
  page: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQ: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
