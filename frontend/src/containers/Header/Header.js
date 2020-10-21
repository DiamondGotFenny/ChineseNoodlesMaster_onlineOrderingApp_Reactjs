import  React , { useEffect, useState }  from 'react';
import HeaderLg from './HeaderLg';
import HeaderM from './HeaderM';
import navBarLogo from 'asset/img/logos/logo_ver2.png';
import navbarLogoM from 'asset/img/logos/logo-mobile-v2.png'
import { useLocation } from 'react-router-dom';

const Header=(props)=>{
  const currentPathname=useLocation().pathname;
  const hideHeaderPages=props.hideHeader;

  function setHeaderColor(pathname) {
    return `absolute ${pathname==='/'?'dark':'light'}`
  }

  function setHeaderLogo(pathname) {
    return pathname==='/'?`${navBarLogo}`:`${navbarLogoM}`
  }
  function setLogoStyle(pathname) {
    return pathname==='/'?"module module-logo light":"module module-logo-small";
  }

  function setAdrsBar(pathname) {
    return pathname==='/'?"address-bar hide":"address-bar";
  }

  function hideHeader(pathname,PagesArr) {
    return PagesArr.includes(pathname)
  }
  //if it is landingpage, we set header to dark mode, else we set it to light mode. 
  const [headerColor,setHeaderClolorHandler]=useState(""); 

  //if it is landingpage, we set the header large logo, else we set the small logo.
  const [headerLogo,setHeaderLogoHandler]=useState(""); 

  //control the logo styles between dark mode and light mode
  const [logoStyles,setLogoStylesHandler]=useState(""); 

  //control the header address bar between dark mode and light mode
  const [adrsBarDisplay,setAdrsBarDisplayHandler]=useState(""); 
  
  //if the current path is not in the hideHeader page list, we show the header.
  const [isHidden,setHide]=useState(false)

  useEffect(()=>{
    setHeaderClolorHandler(setHeaderColor(currentPathname));
    setHeaderLogoHandler(setHeaderLogo(currentPathname));
    setLogoStylesHandler(setLogoStyle(currentPathname));
    setAdrsBarDisplayHandler(setAdrsBar(currentPathname));
    setHide(hideHeader(currentPathname,hideHeaderPages));
  },[currentPathname])


  if (isHidden) {
    return null
  }
 
    return(
      <>
        <HeaderLg headerColor={headerColor} 
        headerLogo={headerLogo} 
        adrsBarDisplay={adrsBarDisplay}
        logoStyles={logoStyles} />
        <HeaderM/>
        </>
    )
}
export default Header;