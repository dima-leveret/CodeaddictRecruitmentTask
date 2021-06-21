import React from "react";
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import NavBar from './components/NavBar';
import SubscribeFooter from './components/Subscribe-Footer';
import LandingPageMain from './components/landing-page/LP-main';
import ListOfUsersAndSearch from './components/ListOfUsers/ListOfUsersAndSearch';
import ProfilePage from "./components/ProfilePage/ProfilePage"

class App extends React.Component {


  render() {
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
          
          {
            this.props.user
            ?
            <Route path={`/profilePage/${this.props.user.login}`} >
              <ProfilePage/>
            </Route>
            :
            <Route path={`/profilePage`} >
              <ProfilePage/>
            </Route>
          }
          
        </Switch>
  
        <SubscribeFooter/>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  user: state.users.user
})


const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App);