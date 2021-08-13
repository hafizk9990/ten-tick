import React from "react"
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import NotFound from "./404"
import Book from "./Book"
import { BrowserRouter as ReactRouter, Switch, Route } from "react-router-dom"
import Extras from "./Extras"

const App = () => {
  
  return(
    <React.Fragment>
      <ReactRouter>
        <NavBar />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>

          <Route exact path = '/about'>
            <About />
          </Route>
          
          <Route exact path = "/book/:data">
            <Book />
          </Route>
          
          <Route exact path = '/extras/:data'>
            <Extras />
          </Route>
          
          <Route exact path = "/*">
            <NotFound />
          </Route>
        </Switch>
      </ReactRouter>
    </React.Fragment>
  );
}

export default App
