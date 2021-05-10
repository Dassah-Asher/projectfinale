const resultsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_RESULTS":
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default resultsReducer;
