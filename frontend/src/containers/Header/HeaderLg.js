import  React, {useEffect,useState}from 'react';
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
import ShoppingCartContainer from './ShoppingCartContainer';
import navBarLogo from 'asset/img/logos/logo_ver2.png';
import navbarLogoM from 'asset/img/logos/logo-mobile-v2.png'
import { signOut_OAuth } from 'actions/GoogleOAuthAction';
import useGoogleAuth2 from 'utilis/customHooks/useGoogleAuth2';
import TopMenuAdrsBar from 'components/TopMenuAdrsBar';

const HeaderLg=(props)=>{
  const {currentPathname}=props;
  const authInfo=useSelector(state=>state.authInfo);
  const userInfo=useSelector(state=>state.userInfo);
  const auth=useGoogleAuth2();
  const dispatch=useDispatch();
  
   /*the header style need to be varied according to different page, especially the text color.
  you may want to alter the text color to dark color if the background image is change to lighter color
  */
 const [isLanding,setisLanding]=useState(true);
  useEffect(()=>{
    const controlUserLogin=(authInfo)=>{
      const userToken=localStorage.getItem("userToken");
      if (userToken) {
        authInfo.data.token=userToken;
        authInfo.data.isSignin=true;
        authInfo.status="sucess";
        dispatch(getUserInfoAction(authInfo));
      }
      
    }
    const checkLanding=(currentPathname)=>{
      if (currentPathname==='/') {
        setisLanding(true)
      } else {
        setisLanding(false)
      }
    }
    controlUserLogin(authInfo)
    checkLanding(currentPathname)
    
  },[authInfo.status,currentPathname]);
 
  const handleLogout=()=>{
    localStorage.removeItem('userToken');
    if (authInfo.type==="OAuth") {
      auth.signOut();
      dispatch(signOut_OAuth());
    }else{
      dispatch(userLogoutAction());
    }
    history.push("/")
  }
  
  const renderUser=(isSignin,userInfo)=>{
    if (isSignin==="sucess"&&userInfo.status==="sucess") {
      return (
        <li className="mr-3">
            <Link to={`/userProfile/${userInfo.data.email}`} className="mr-1 pr-2 border-right">
               <FontAwesomeIcon icon={faUser} className="user-icon"/>{userInfo.data.name}
            </Link>
            <Link type="button" onClick={handleLogout} className="mr-3 ml-1" to={"/"}>Logout</Link>
        </li>
      )
    }else{
      return (
        <li className="mr-3">
            <Link to={'/login'} className="mr-1 pr-2 border-right">Login</Link>
            <Link to={'/register'} className="mr-3 ml-1">Register</Link>
        </li>
      )
    }
    
  }
    return (
        <header id="header" className={isLanding?'dark':'light'} >
        <Container fluid>
            <Navbar id="home-navbar">
                <Link className="navbar-brand" to="/">
                  <div className={isLanding?"module module-logo light":"module module-logo-small"}>
                    <img
                        src={isLanding?navBarLogo:navbarLogoM}
                        alt="logo Chinese Noodles Master"
                        width="359"
                    />
                  </div>
                </Link>
                
                <Form.Group className={isLanding?"address-bar hide":"address-bar"}>
                  <Form.Label htmlFor="delivering_address" className="address-bar_label">Delivering to</Form.Label>
                   <TopMenuAdrsBar/>
                </Form.Group>

                <Nav className="ml-auto">
                  <ul id="nav-main" className='d-flex align-items-center mr-2'>
                    <li className="ml-3 border-right">
                      <a className="mr-1 ml-3 pr-2 border-right" href="#">EN</a
                      ><a className="mr-3 ml-1" href="#">中文</a>
                    </li>
                    {renderUser(authInfo.status,userInfo)}
                  </ul>
                  <ShoppingCartContainer/>
                </Nav>
              </Navbar>
          </Container>
      </header>
    )
}
export default HeaderLg;