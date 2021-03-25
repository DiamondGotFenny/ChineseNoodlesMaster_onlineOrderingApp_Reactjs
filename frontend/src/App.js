import React, { useEffect, useState } from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import FooterContainer from './containers/Footer/FooterContainer';
import BackToTop from 'components/backToTopBtn';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import history from 'services/history';
import ProductsDisplay from './pages/ProductsDisplay';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import TermsandConditions from 'pages/TermsandCondition';
import ProductDetailPage from 'pages/ProductDetailPage';
import SideShoppingCart from 'components/SideShoppingCart';
import VendorPage from './pages/VendorPage';
import UserProfilePage from 'pages/UserProfilePage';
import CheckOutPage from './pages/CheckOutPage';
import ProtectedRoute from 'components/ProtectedRoute';
import { useSelector } from 'react-redux';
import ScrollToTop from 'utilis/ScrollToTop';
import PaySuccessPage from 'pages/PaySuccessPage';

function App() {
  //we don't want some of routes show header and footer.
  const hideHeaderFooterpaths = ['/userProfile', '/login', '/register'];
  const [isSignIn, setisSignIn] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);
  useEffect(() => {
    if (userInfo.status === 'sucess') {
      setisSignIn(true);
    }
  }, [userInfo.status]);
  return (
    <div className='App'>
      <SideShoppingCart />
      <BackToTop />
      <Router history={history}>
        <ScrollToTop />
        <div id='body-wrapper'>
          <Header hideHeaderPages={hideHeaderFooterpaths} />
          <main>
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path='/product/:id' component={ProductDetailPage} />
              <Route path='/vendors/:id' component={VendorPage} />
              <Route path='/products' component={ProductsDisplay} />
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <ProtectedRoute
                isSignIn={isSignIn}
                path='/userProfile/:email'
                component={UserProfilePage}
              />
              <ProtectedRoute
                isSignIn={isSignIn}
                path='/checkout'
                component={CheckOutPage}
              />
              <ProtectedRoute
                isSignIn={isSignIn}
                path='/paySuccess/:id'
                component={PaySuccessPage}
              />
              <Route path='/terms' component={TermsandConditions} />
            </Switch>
          </main>
          <FooterContainer hideFooter={hideHeaderFooterpaths} />
        </div>
      </Router>
    </div>
  );
}

export default App;
