import axios from 'axios';
import { REACT_APP_GOOGLE_MAP_APIKEY } from './TemEnvService';
 export const getUserLocation= async ()=>{  
  const MapApiKey=REACT_APP_GOOGLE_MAP_APIKEY;
   
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