import React from "react";
import './App.css';

import NavBar from './components/NavBar';
import SubscribeFooter from './components/Subscribe-Footer';
import LandingPageMain from './components/landing-page/LP-main'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPageMain/>
      <SubscribeFooter/>
    </div>
  );
}

export default App;