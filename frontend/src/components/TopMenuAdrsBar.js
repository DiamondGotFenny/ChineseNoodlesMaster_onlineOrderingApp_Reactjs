import  React, {useEffect,useState}from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from 'services/useGeoLocation';
import { handleInputAdrs } from 'actions/inputAddressAction';
import  queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
import  history  from 'services/history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
const TopMenuAdrsBar = () => {
    const address_input=useSelector(state=>state.address_input);
    const [address,setaddress]=useState(address_input);
    const dispatch=useDispatch();
    
    /*
      in the real project, we can get the vendors list which near the user based on current location coordinates, but now we put guangzhou as city query parameter for display purpose only, 
        because the limit of data, you should dispatch the address in real project. 
      */
     const getCurrentPosistion=async()=>{
        const currentLocation= await getUserLocation();
        setaddress(currentLocation)
      
     }
     const queryParams=queryString.parse(useLocation().search);
     
     const pushNewQuery=(address)=>{
        const newQueries = { ...queryParams, address:address};
        history.push({ search: queryString.stringify(newQueries) });
        setaddress("");
      }
      const handleInputVal=(val)=>{
        pushNewQuery(val);
        setaddress(val);
        dispatch(handleInputAdrs(val))
      }
     const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
         handleInputVal(e.target.value)
        }
      }
    const handleClear=()=>{
        setaddress("");
    }
    const handleInput=()=>{
         handleInputVal(address)
    }
    useEffect(()=>{
        setaddress(address_input);
    },[address_input])
    return ( 
        <div className="address-bar-input">
             <button className="address-input-btn enter-btn" onClick={handleInput}>
                <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            </button>
            <input type="text" className="address-input-area" value={address} onChange={e=>setaddress(e.target.value)} onKeyPress={_handleKeyDown}/>
            <button className="address-input-btn clear" onClick={handleClear}>
               <FontAwesomeIcon icon={faTimes} />
            </button>
            <button className="address-input-btn" onClick={getCurrentPosistion}>
                <span className="ti-location-pin"></span>
            </button>
        </div>
     );
}
 
export default TopMenuAdrsBar;