import  React  from 'react';
import navBarLogo from '../../asset/img/logos/logo_ver2.png';
import Container  from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';

const Header=()=>{
    return(
        <header id="header" className="absolute">
        <Container fluid>
            <Navbar id="home-navbar">
                <Navbar.Brand href="#home">
                  <div className="module module-logo light">
                    <a href="./landingPage.html"
                      ><img
                        src={`${navBarLogo}`}
                        alt="logo Chinese Noodles Master"
                        width="359"
                    /></a>
                  </div>
                </Navbar.Brand>
                <Nav inline className="ml-auto justify-content-end">
                  <ul id="nav-main" className='d-flex'>
                    <li class="ml-3 border-right">
                      <a class="mr-1 ml-3 pr-2 border-right" href="#">EN</a
                      ><a class="mr-3 ml-1" href="#">中文</a>
                    </li>
                    <li class="mr-3">
                      <a class="mr-1 pr-2 border-right" href="./loginForm.html">Login</a>
                      <a class="mr-3 ml-1" href="./registrationForm.html">Register</a>
                    </li>
                  </ul>
                  <a
                href="#"
                class="module module-cart right"
                data-toggle="modal"
                data-target="#shopping-cart-modal"
              >
                <span class="cart-icon">
                  <i class="ti ti-shopping-cart"></i>
                  <span class="notification">3</span>
                </span>
                <span class="cart-value">$45.00</span>
              </a>
                </Nav>
              </Navbar>
          </Container>
      </header>
    )
}
export default Header;