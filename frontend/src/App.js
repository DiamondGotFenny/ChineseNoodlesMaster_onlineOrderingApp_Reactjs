import React from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <a href="s" class="return-to-top hidden" id="backTopBtn">
        <span class="ti-angle-up"></span>
      </a>
      <div id="body-wrapper">
        <Header/>
        <LandingPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
