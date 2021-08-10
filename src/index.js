import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

/*
  Importing firebase configuration settings from our file 
  and firebase app from node_modules
  and then initializing our app to connect with the realtime DB
*/

import firebase from "firebase"
import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
