import React from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';
import BackToTop from 'components/backToTopBtn';
import { Router,Switch,Route,Link } from 'react-router-dom';
import CuisinePage from 'pages/CuisinePage';
import history from 'services/history';


function App() {
  return (
    <div className="App">
      <BackToTop/>
      <Router history={history}>
        <div id="body-wrapper">
          <Header/>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/cuisines'  component={CuisinePage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
