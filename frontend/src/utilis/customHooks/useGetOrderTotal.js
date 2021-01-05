import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useGetOrderTotal=()=>{
    const shoppingCart=useSelector(state=>state.shoppingCart);
    const [total,settotal]=useState(0);
    useEffect(()=>{
      
        return () => {
           
          };
    },[shoppingCart])
        return total ;
}
export default useGetOrderTotal;
