import React from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <a href="s" class="return-to-top hidden" id="backTopBtn">
        <span class="ti-angle-up"></span>
      </a>
      <div id="landingPage-body-wrapper">
        <Header/>
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
