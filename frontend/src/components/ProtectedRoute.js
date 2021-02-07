import  React, { useState,useEffect }  from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useUserLogin from './../utilis/customHooks/useUserLogin';

const ProtectedRoute = ({path,component:Component,render,isSignIn,...rest}) => {
    return (
        <Route 
        {...rest}
        render={
            props=>{
                if (!isSignIn) return <Redirect to={{pathname:"/login",state:{from:props.location}}}/>;
                return Component?<Component {...props}/>:render(props);
            }
        }
        />
     );
}
 
export default ProtectedRoute;
