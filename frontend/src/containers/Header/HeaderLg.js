import  React from 'react';
import Container  from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

const HeaderLg=(props)=>{
  const {headerColor,headerLogo,logoStyles,adrsBarDisplay}=props;
    return (
        <header id="header" className={headerColor} >
        <Container fluid>
            <Navbar id="home-navbar">
                <Navbar.Brand href="#home">
                  <div className={`${logoStyles}`}>
                    <Link to="/"
                      ><img
                        src={`${headerLogo}`}
                        alt="logo Chinese Noodles Master"
                        width="359"
                    /></Link>
                  </div>
                </Navbar.Brand>
                
                <Form.Group className={`${adrsBarDisplay}`}>
                  <Form.Label for="delivering_address" class="address-bar_label">Delivering to</Form.Label>
                    <div class="address-bar-input">
                      <input type="text" class="address-input-area" placeholder="22 Jln Wajek, Singapore 588475"/>
                      <button class="address-input-btn">
                        <span class="ti-location-pin"></span>
                      </button>
                    </div>
                </Form.Group>

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