import { useEffect, useState } from "react";
import firebase from "firebase";

/*
  This is our custom useFetch( ... ) hook. It is fetching data
  from Firebase realtime DB

  If the application loads for the first time, and if we 
  don't have the Firebase data, then we go to firebase
*/

const useFetch = () => {
  const [appData, setappData] = useState( null );
  const [isDataLoding, setIsDataLoading] = useState( false );

  useEffect( () => {
    setIsDataLoading(true);
    
    setTimeout(() => {
      firebase.database().ref('/ten-tick/matches').on('value', (data) => {
        setIsDataLoading(false);
        setappData( data.val() );
      });
    }, 0);
  }, []);

  return [appData, isDataLoding];
}

export default useFetch
