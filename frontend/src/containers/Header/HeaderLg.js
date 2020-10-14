import  React from 'react';
import navBarLogo from 'asset/img/logos/logo_ver2.png';
import Container  from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const HeaderLg=(props)=>{
    return (
        <header id="header" className={props.headerColor} >
        <Container fluid>
            <Navbar id="home-navbar">
                <Navbar.Brand href="#home">
                  <div className="module module-logo light">
                    <Link to="/"
                      ><img
                        src={`${navBarLogo}`}
                        alt="logo Chinese Noodles Master"
                        width="359"
                    /></Link>
                  </div>
                </Navbar.Brand>
                <Nav className="ml-auto">
                  <ul id="nav-main" className='d-flex align-items-center mr-2'>
                    <li className="ml-3 border-right">
                      <a className="mr-1 ml-3 pr-2 border-right" href="#">EN</a
                      ><a className="mr-3 ml-1" href="#">中文</a>
                    </li>
                    <li className="mr-3">
                      <a className="mr-1 pr-2 border-right" href="./loginForm.html">Login</a>
                      <a className="mr-3 ml-1" href="./registrationForm.html">Register</a>
                    </li>
                  </ul>
                  <a
                href="#"
                className="module module-cart right align-middle"
                data-toggle="modal"
                data-target="#shopping-cart-modal"
              >
                <span className="cart-icon">
                  <i className="ti ti-shopping-cart"></i>
                  <span className="notification">3</span>
                </span>
                <span className="cart-value">$45.00</span>
              </a>
                </Nav>
              </Navbar>
          </Container>
      </header>
    )
}
export default HeaderLg;