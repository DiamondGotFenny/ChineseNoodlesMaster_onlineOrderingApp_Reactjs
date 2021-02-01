import { signIn_OAuth, signOut_OAuth } from 'actions/GoogleOAuthAction';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { REACT_APP_GOOGLE_OAUTH2_CLIENT_ID } from 'services/TemEnvService';
 
const clientId=REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
function useGoogleAuth2() {
  //const clientId=process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID; doesn't work, don't know why
  const [auth, setAuth] = useState(null);
  const dispatch = useDispatch();
 
  useEffect(() => {
    let auth;
 
    function onAuthChange(isSignedIn) {
      
      if (isSignedIn) {
        const email=auth.currentUser.get().getBasicProfile().getEmail();
        const name=auth.currentUser.get().getBasicProfile().getName();
        const id_Token=auth.currentUser.get().getAuthResponse().id_token;
        dispatch(signIn_OAuth({email,name,id_Token}));
      } else {
        dispatch(signOut_OAuth());
      }
    }
    if (window.gapi) {
      window.gapi.load('client:auth2', () => {
        window.gapi.client
          .init({
          clientId,
            scope: 'email profile'
          })
          .then(() => {
            auth = window.gapi.auth2.getAuthInstance();
            setAuth(auth);
            onAuthChange(auth.isSignedIn.get());
            auth.isSignedIn.listen(onAuthChange);
          }).catch(error=>console.error(error));
      })
    }
  
  }, [dispatch]);
 
  return auth;
}
 
export default useGoogleAuth2;