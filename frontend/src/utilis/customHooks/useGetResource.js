import { useEffect, useState } from 'react';
import httpService from 'services/httpService';
/*this is a custom hook that used for get resource from the server
when component did mounted.*/
const useGetResource=(initialQuery)=>{
    const [newResource,setNewResource]=useState([]);
    const [query, setquery] = useState(initialQuery);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(()=>{
        let unmounted = false;
        const handleFetchRespone=(res)=>{
            if (unmounted) return [];
            setIsLoading(false);
            !unmounted&&setNewResource(res.data);
        }
            async function fetchNewResource(query) {
                try {
                    
                    setIsLoading(true);
                    const respone=await httpService.get(query);
                    console.log(respone,"respone");
                    handleFetchRespone(respone)
                } catch (error) {
                    console.error(error.response,"log error");
                    setIsLoading(false)
                    setHasError(true)
                    
                }
                
            }
            if (initialQuery&&!unmounted) {
                fetchNewResource(query)
            }
        return () => {
            unmounted = true;
          };
    },[query])
        return {isLoading,hasError,data:newResource} ;
}
export default useGetResource;
