import { createContext, useEffect, useState } from "react";

export const ResultContext = createContext({});
const api_url = process.env.REACT_APP_API_URL_PROD + '/results';

//Context to store the results data
const ResultContextProvider = (props) => {
  const [results, setResults] = useState({});
  // fetching the data to initialize the context.
  const fetchResults = async () => {
    fetch(api_url)
      .then((response) => (response.json()))
      .then((resultsData) => {
        setResults(resultsData);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <ResultContext.Provider value={[results, setResults]}>
      {props.children}
    </ResultContext.Provider>
  );
}

export default ResultContextProvider;