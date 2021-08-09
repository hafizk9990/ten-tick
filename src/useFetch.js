import { useEffect, useState } from "react";
import firebase from "firebase";
import { localDB, assignLocalDB } from './LocalDB'

/*
  This is our custom useFetch( ... ) hook. It is fetching data
  from Firebase realtime DB

  If the application loads for the first time, and if we 
  don't have the Firebase data, then we go to firebase and 
  also store its data locally in LocalDB.js file

  Else, if we already have the data in localDB variable, 
  we access it from over there rather than going to the DB
*/

const useFetch = () => {
  const [appData, setappData] = useState( null );
  const [isDataLoding, setIsDataLoading] = useState( false );

  useEffect( () => {
    if (!localDB) {
      setIsDataLoading(true);
      
      firebase.database().ref('/ten-tick').on('value', (data) => {
        setIsDataLoading(false);
        assignLocalDB( data.val() );
        setappData(localDB);
      });
    }
    else {
      console.log('localDB state alerady:', localDB);
      setappData(localDB);
    }
  }, []);

  return [appData, isDataLoding];
}

export default useFetch
