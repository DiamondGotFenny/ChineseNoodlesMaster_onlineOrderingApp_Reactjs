import axios from 'axios';
import Geocode from "react-geocode";
 export const getUserLocation= async ()=>{  
  const MapApiKey="AIzaSyCAoYWLlH902m5l7BzMHHBI1lHLsZ_Fu4w";
    /* try {
      const {data}= await axios.get('https://ipinfo.io?token=c24295f868d2f9');
      return data.city
    } catch (error) {
      console.error(error)
    } */
  /**** 
   * we will get the detail address from google map by using the following method
   *  if google key was provided
   * import Geocode from "react-geocode";
 export const getUserLocation= async ()=>{  
    
 
  }
  */
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  
  if (pos.coords.latitude&&pos.coords.longitude) {
    try {
      const respon=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&key=${MapApiKey}`)
       console.log(respon);
      const adres=respon.data.results[0].formatted_address;
      console.log(adres,'adres');
      return adres;
    } catch (error) {
      console.error(error)
    }
  }
 // return pos;
}