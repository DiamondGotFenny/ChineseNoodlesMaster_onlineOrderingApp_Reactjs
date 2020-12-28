import  React , { useEffect, useState }  from 'react';
import HeaderLg from './HeaderLg';
import HeaderM from './HeaderM';

import { useLocation } from 'react-router-dom';

const Header=(props)=>{
  const currentPathname=useLocation().pathname;
  const {hideHeaderPages}=props;

 

  //if the current path is not in the hideHeader page list, we show the header.
  const [isHidden,setHide]=useState(false)
  
  function hideHeader(pathname,PagesArr) {
    return PagesArr.includes(pathname)
  }

  useEffect(()=>{
    setHide(hideHeader(currentPathname,hideHeaderPages));
  },[currentPathname])


  const renderHeader=(isHidden)=>{
    if (isHidden) return null
    return(
      <>
        <HeaderLg currentPathname={currentPathname}/>
        <HeaderM/>
      </>
    )
  }
  
  return (renderHeader(isHidden))
   
}
export default Header;