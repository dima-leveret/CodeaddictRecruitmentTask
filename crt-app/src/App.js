import React from "react";
import { Switch, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import SubscribeFooter from './components/Subscribe-Footer';
import LandingPageMain from './components/landing-page/LP-main';
import ListOfUsersAndSearch from './components/ListOfUsers/ListOfUsersAndSearch'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' >
          <LandingPageMain/>
        </Route>

        <Route path='/listOfUsers' >
          <ListOfUsersAndSearch/>
        </Route>
      </Switch>
      <SubscribeFooter/>
    </div>
  );
}

export default App;