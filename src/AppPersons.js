import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Persons from "./pages/Persons";
import SavedPersons from "./pages/SavedPersons";
import Error from "./pages/Error";
import Nav from './components/Nav';




const PersonApp = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Persons} />
        <Route exact path="/persons" component={Persons} />
        <Route exact path="/savedPersons" component={SavedPersons} />
        <Route component={Error}/>
      </Switch>
    </div>
  </Router>;


export default PersonApp;