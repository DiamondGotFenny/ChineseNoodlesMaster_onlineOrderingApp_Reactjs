import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useGoogleAuth2 from "utilis/customHooks/useGoogleAuth2";

const GoogleOAuth=()=>{
  const auth=useGoogleAuth2();
  const isSignedIn=useSelector(state=>state.authInfo.data.isSignin);
  const type=useSelector(state=>state.authInfo.type);
  const onSignInClick = () => auth.signIn()
  const onSignOutClick = () => auth.signOut()
 
  const renderAuthBtn=(isSignedIn)=> {
    
    if (isSignedIn === null) {
      return <span></span>;
    } else if (isSignedIn === true&&type==="OAuth") {
      return (
        <Button  onClick={onSignOutClick} variant="primary">
            Sign Out
        </Button>
      );
    } else  {
      return ( <Button className={`btn btn-block btn-google btn-OAlogin`} onClick={onSignInClick}>
                <FontAwesomeIcon icon={faGoogle} className='btn-OAlogin-icon'/> Login via Google
            </Button>);
    }
  }
  return <>{renderAuthBtn(isSignedIn)}</>;
}
export default GoogleOAuth;