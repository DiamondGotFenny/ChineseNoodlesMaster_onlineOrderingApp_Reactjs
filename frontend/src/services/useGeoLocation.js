import axios from 'axios';
 export const getUserLocation= async ()=>{  
  
    try {
      const {data}= await axios.get('https://ipinfo.io?token=c24295f868d2f9');
      return data.city
    } catch (error) {
      console.error(error)
    }
  /**** 
   * we will get the detail address from google map by using the following method
   *  if google key was provided
   * import Geocode from "react-geocode";
 export const getUserLocation= async ()=>{  
    
  const pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  Geocode.setApiKey("AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo");
  if (pos.coords.latitude&&pos.coords.longitude) {
    Geocode.fromLatLng(pos.coords.latitude, pos.coords.longitude).then(
      response => {
        return response.results[0].formatted_address;
      },
      error => {
        console.error(error);
      }
    )
  }
  */
  
}