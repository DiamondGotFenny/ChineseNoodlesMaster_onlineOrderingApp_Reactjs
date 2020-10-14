import  React , { useEffect, useState }  from 'react';
import HeaderLg from './HeaderLg';
import HeaderM from './HeaderM';
import { useLocation } from 'react-router-dom';

const Header=(props)=>{
  const currentPathname=useLocation().pathname;
  const hideHeaderPages=props.hideHeader;
  function setHeaderColor(pathname) {
    return `absolute ${pathname==='/'?'dark':'light'}`
  }
  function hideHeader(pathname,PagesArr) {
    return PagesArr.includes(pathname)
  }
  //if it is landingpage, we set header to dark mode, else we set it to light mode. 
  const [headerColor,setHeaderClolorHandler]=useState(""); 
  
  //if the current path is not in the hideHeader page list, we show the header.
  const [isHidden,setHide]=useState(true)

  useEffect(()=>{setHeaderClolorHandler(setHeaderColor(currentPathname))},[currentPathname])
  useEffect(()=>{setHide(hideHeader(currentPathname,hideHeaderPages))},[currentPathname])

  if (isHidden) {
    return null
  }
 
    return(
      <>
        <HeaderLg headerColor={headerColor}/>
        <HeaderM/>
        </>
    )
}
export default Header;