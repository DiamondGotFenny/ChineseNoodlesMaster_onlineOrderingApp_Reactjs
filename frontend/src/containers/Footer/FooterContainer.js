import  React , { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function FooterContainer(props) {
    const currentPathname=useLocation().pathname;
    const hideFooterPages=props.hideFooter;

    function hideFooter(pathname,PagesArr) {
        return PagesArr.includes(pathname)
      }
      //if the current path is not in the hideHeader page list, we show the header.
     const [isHidden,setHide]=useState(true)
     useEffect(()=>{setHide(hideFooter(currentPathname,hideFooterPages))},[currentPathname])

  if (isHidden) {
    return null
  }
    return (
        <Footer/>
    )
}
export default FooterContainer;