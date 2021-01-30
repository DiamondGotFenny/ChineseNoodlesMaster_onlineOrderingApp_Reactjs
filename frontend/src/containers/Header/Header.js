import  React , { useEffect, useState }  from 'react';
import HeaderLg from './HeaderLg';
import HeaderM from './HeaderM';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleInputAdrs } from 'actions/inputAddressAction';

const Header=(props)=>{
  const currentPathname=useLocation().pathname;
  const {hideHeaderPages}=props;
  const dispatch=useDispatch();
  //by default, we fetch the produts based on visitor's address which we get from ip
  const [adrs,setAdrs]=useState("");
  const getCurrentPosistion=async()=>{
    /*const city= await getUserLocation();
     /*we put guangzhou as city query parameter for display purpose only, 
    because the limit of data, you should replace it in real project.  */
      const city="guangzhou";
      setAdrs(city)
  }
 

  //if the current path is not in the hideHeader page list, we show the header.
  const [isHidden,setHide]=useState(false)
  
  function hideHeader(pathname,PagesArr) {
    return PagesArr.includes(pathname)
  }

  useEffect(()=>{
    getCurrentPosistion();
    dispatch(handleInputAdrs(adrs));
    setHide(hideHeader(currentPathname,hideHeaderPages));
  },[adrs,currentPathname])


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