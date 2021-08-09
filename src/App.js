import React from "react"
import useFetch from "./useFetch"

const App = () => {
  const [appData, isDataLoding] = useFetch();
  
  return(
    <React.Fragment>
      <h2> Ten-Tick -- Purchasing Tennis Tickets Online </h2>
      
      { isDataLoding && <div> Loading Data for you </div> }
      { appData && <div> { appData.hello } </div> }
    </React.Fragment>
  );
}

export default App
