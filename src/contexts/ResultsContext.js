import { createContext, useReducer } from "react";
import resultsReducer from "../reducers/resultsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  results: [],
  error: null,
};

export const ResultsContext = createContext();

const ResultsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resultsReducer, initialState);
  //get all medications
  async function getResults() {
    const res = await axios.get(
      "https://rhest.herokuapp.com/api/v2/results"
    );
    try {
      dispatch({
        type: "GET_ALL_REULTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ResultsContext.Provider
      value={{ getResults, results: state.results, loading: state.loading }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;