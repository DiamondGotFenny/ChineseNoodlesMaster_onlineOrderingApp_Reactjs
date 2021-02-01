import axios from "axios";
export  const getCityFromIP=async ()=>{
    try {
        const {data}= await axios.get('https://ipinfo.io?token=c24295f868d2f9');
        return data.city
      } catch (error) {
        console.error(error)
      }
}