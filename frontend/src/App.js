import React from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import FooterContainer from './containers/Footer/FooterContainer';
import BackToTop from 'components/backToTopBtn';
import { Router,Switch,Route,Link, Redirect } from 'react-router-dom';
import history from 'services/history';
import ProductsDisplay from './pages/ProductsDisplay';
import UserProfile from './containers/UserProfile/UserProfile';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import TermsandConditions from 'pages/TermsandCondition';
import ProductDetailPage from 'pages/ProductDetailPage';
import SideShoppingCart from 'components/SideShoppingCart';
import ScrollToTop from 'utilis/ScrollToTop';

function App() {
  //we don't want some of routes show header and footer. 
  const hideHeaderFooterpaths=['/userProfile','/login','/register']
  return (
    <div className="App">
      <SideShoppingCart/>
      <BackToTop/>
      
      <Router history={history}>
        <div id="body-wrapper">
          <Header hideHeaderPages={hideHeaderFooterpaths}/>
          <main>
          <Switch>
              <Route path='/' exact component={LandingPage} />
              <ScrollToTop>
                <Route path='/product/:id'  component={ProductDetailPage} />
                <Route path='/products'  component={ProductsDisplay} />
              </ScrollToTop>
              <Route path='/userProfile' component={UserProfile}/>
              <Route path='/register' component={Register}/>
              <Route path='/login' component={Login}/>
              <Route path='/terms' component={TermsandConditions} />
          </Switch>
          </main>
          <FooterContainer hideFooter={hideHeaderFooterpaths}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
