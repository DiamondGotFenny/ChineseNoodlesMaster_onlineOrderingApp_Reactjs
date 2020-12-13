import  React, {useEffect}from 'react';
import Container  from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getUserInfoAction, userLogoutAction } from 'actions/userAction';
import history from 'services/history';

const HeaderLg=(props)=>{
  const {headerColor,headerLogo,logoStyles,adrsBarDisplay}=props;
  const authInfo=useSelector(state=>state.authInfo);
  const userInfo=useSelector(state=>state.userInfo);
  const dispatch=useDispatch();
  
  
  useEffect(()=>{
    const userToken=localStorage.getItem("userToken");
    if (userToken) {
      authInfo.data.token=userToken;
      authInfo.data.isSignin=true;
      authInfo.status="sucess";
    }
    
    dispatch(getUserInfoAction(authInfo));
  },[authInfo.status]);
 
  const handleLogout=()=>{
    dispatch(userLogoutAction());
    history.push("/")
  }
  const renderUser=(isSignin,userInfo)=>{
    if (isSignin==="sucess"&&userInfo.status==="sucess") {
      return (
        <li className="mr-3">
            <Link to={'/userProfile'} className="mr-1 pr-2 border-right">
               <FontAwesomeIcon icon={faUser} className="user-icon"/>{userInfo.data.name}
            </Link>
            <Link type="button" onClick={handleLogout} className="mr-3 ml-1" to={"/"}>Logout</Link>
        </li>
      )
    }
    return (
      <li className="mr-3">
          <Link to={'/login'} className="mr-1 pr-2 border-right">Login</Link>
          <Link to={'/register'} className="mr-3 ml-1">Register</Link>
      </li>
    )
  }
    return (
        <header id="header" className={headerColor} >
        <Container fluid>
            <Navbar id="home-navbar">
                <Navbar.Brand href="/">
                  <div className={`${logoStyles}`}>
                    <img
                        src={`${headerLogo}`}
                        alt="logo Chinese Noodles Master"
                        width="359"
                    />
                  </div>
                </Navbar.Brand>
                
                <Form.Group className={`${adrsBarDisplay}`}>
                  <Form.Label htmlFor="delivering_address" className="address-bar_label">Delivering to</Form.Label>
                    <div className="address-bar-input">
                      <input type="text" className="address-input-area" placeholder="22 Jln Wajek, Singapore 588475"/>
                      <button className="address-input-btn">
                        <span className="ti-location-pin"></span>
                      </button>
                    </div>
                </Form.Group>

                <Nav className="ml-auto">
                  <ul id="nav-main" className='d-flex align-items-center mr-2'>
                    <li className="ml-3 border-right">
                      <a className="mr-1 ml-3 pr-2 border-right" href="#">EN</a
                      ><a className="mr-3 ml-1" href="#">中文</a>
                    </li>
                    {renderUser(authInfo.status,userInfo)}
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