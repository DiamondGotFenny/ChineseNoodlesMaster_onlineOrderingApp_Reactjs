import  React  from 'react';
import navBarLogo from '../../asset/img/logos/logo_ver2.png';

const Header=()=>{
    return(
        <header id="header" className="absolute">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="module module-logo light">
                <a href="./landingPage.html"
                  ><img
                    src={`${navBarLogo}`}
                    alt="logo Chinese Noodles Master"
                    width="359"
                /></a>
              </div>
            </div>
            <nav
              id="home-navbar"
              className="navbar navbar-expand-md col-md-7 navbar-light flex-row-reverse"
            >
              <ul id="nav-main" className="nav nav-main">
                <li className="ml-3 border-right">
                  <a className="mr-1 ml-3 pr-2 border-right" href="#">EN</a
                  ><a className="mr-3 ml-1" href="#">中文</a>
                </li>
                <li className="mr-3">
                  <a className="mr-1 pr-2 border-right" href="./loginForm.html">Login</a>
                  <a className="mr-3 ml-1" href="./registrationForm.html">Register</a>
                </li>
              </ul>
            </nav>
            <div className="col-md-2">
              <a
                href="#"
                className="module module-cart right"
                data-toggle="modal"
                data-target="#shopping-cart-modal"
              >
                <span className="cart-icon">
                  <i className="ti ti-shopping-cart"></i>
                  <span className="notification">3</span>
                </span>
                <span className="cart-value">$45.00</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header;