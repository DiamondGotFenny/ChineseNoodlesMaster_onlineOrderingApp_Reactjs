import { useEffect, useState } from 'react';
import httpService from 'services/httpService';
/*this is a custom hook that used for get resource from the server
when component did mounted.*/
const useGetResource=(query)=>{
    const [newResource,setNewResource]=useState([]);

    async function fetchNewResource(query) {
        try {
            const {data}=await httpService.get(query);
            setNewResource(data)
        } catch (error) {
            console.error(error);
        }
        
    }
    useEffect(()=>{fetchNewResource(query)},[query])
    return newResource;
}
export default useGetResource;