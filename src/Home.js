import React from "react";
import useFetch from "./useFetch"
import loadingGif from './assets/img/loading.gif'
import Card from './Card'

const Home = () => {
  const [appData, isDataLoding] = useFetch();

  return (
    <React.Fragment>
    {
      isDataLoding &&
      <div className = "d-flex align-items-center justify-content-center">
        <img className = "loading-gif center-align" src = { loadingGif } alt = "loading" />
      </div> 
    }

    {
      appData &&
      <div>
        {
          appData.map( (eachMatch, index) => {
            return(
              <div className = "all-cards">
                <Card 
                  key = { index }
                  match = { eachMatch }
                  index = { index }
                />
              </div>
            );
          })
        }
      </div> 
    }
    </React.Fragment>
  );
}

export default Home
