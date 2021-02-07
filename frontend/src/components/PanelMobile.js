import  React, {useEffect} from 'react';
import  Nav  from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import logoFooterMobile from 'asset/img/logos/logo_ver2_footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { socialMedia } from 'asset/temJsonFiles/socialMedia';
import SocialMedia from 'components/SocialMedia';
import { useSelector,useDispatch } from 'react-redux';
import { signOut_OAuth } from 'actions/GoogleOAuthAction';
import { getUserInfoAction, userLogoutAction } from 'actions/userAction';
import useGoogleAuth2 from 'utilis/customHooks/useGoogleAuth2';
import history from 'services/history';

const PanelMobie = (props) => {
    const {showPanel,onHide}=props;
    const userInfo=useSelector(state=>state.userInfo);
    const authInfo=useSelector(state=>state.authInfo);
    const {pathname}=useLocation();
    const auth=useGoogleAuth2();
    const dispatch=useDispatch();
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
      useEffect(()=>{
        onHide(); //we close the mobile menu after we click the menu button
      },[pathname])
    const renderUserInfo=()=>{
        if (userInfo.status==="sucess"&&userInfo.data) {
            return (
                <>
                <li><Link to={`/userProfile/${userInfo.data.email}`}>{userInfo.data.name}</Link></li>
                <li> <Link type="button" onClick={handleLogout} className="mr-3 ml-1" to={"/"}>Logout</Link></li>
                </>
            )
        }else{
            return (
                <>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                </>
            )
        }
    }
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
        controlUserLogin(authInfo)
        
      },[authInfo.status]);
    return ( 
        <Nav id="panel-mobile" className={showPanel}>
            <div className="module module-logo bg-dark dark">
                <Link to={"/"}>
                <img
                    src={`${logoFooterMobile}`}
                    alt="Chinese Noodles Master Logo"
                    width="120"
                />
                </Link>
                <Button variant="outline-light" className="close-btn" onClick={onHide}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            </div>
            <Nav className="module module-navigation">
                <ul id="nav-main-mobile" className="nav nav-main-mobile">
                    {renderUserInfo()}
                    <li><Link to={'/'}>About Us</Link></li>
                    <li><Link to={'/'}>Join Us</Link></li>
                    <li><Link to={'/'}>Jobs</Link></li>
                    <li><Link to={'/'}>Download Our App</Link></li>
                </ul>
            </Nav>
            <div className="module module-social">
                <h5 className="text-sm mb-3">Follow Us!</h5>
                <div className="social-container">
                {socialMedia.map(item=>< SocialMedia key={item.iconContainer} item={item}/>)}
                </div>
            </div>
        </Nav>
     );
}
 
export default PanelMobie;