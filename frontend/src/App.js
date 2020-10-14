import React from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import FooterContainer from './containers/Footer/FooterContainer';
import BackToTop from 'components/backToTopBtn';
import { Router,Switch,Route,Link } from 'react-router-dom';
import history from 'services/history';
import ProductsDisplay from './pages/ProductsDisplay';
import UserProfile from './containers/UserProfile/UserProfile';



function App() {
  //we don't want some of routes show header and footer. 
  const hideHeaderFooterpaths=['/userProfile','/login']
  return (
    <div className="App">
      <BackToTop/>
      <Router history={history}>
        <div id="body-wrapper">
          <Header hideHeader={hideHeaderFooterpaths}/>
          <Switch>
            <main>
              <Route path='/' exact component={LandingPage} />
              <Route path='/cuisines'  component={ProductsDisplay} />
              <Route path='/userProfile' component={UserProfile}/>
            </main>
          </Switch>
          <FooterContainer hideFooter={hideHeaderFooterpaths}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
