import React from 'react';
import './App.scss';
import LandingPage from 'pages/LandingPage';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';
import BackToTop from 'components/backToTopBtn';
import { Router,Switch,Route,Link } from 'react-router-dom';
import history from 'services/history';
import ProductsDisplay from './pages/ProductsDisplay';


function App() {
  return (
    <div className="App">
      <BackToTop/>
      <Router history={history}>
        <div id="body-wrapper">
          <Header/>
          <Switch>
            <main>
              <Route path='/' exact component={LandingPage} />
              <Route path='/cuisines'  component={ProductsDisplay} />
            </main>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
