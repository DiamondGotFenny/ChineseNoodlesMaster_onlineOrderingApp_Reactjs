import searchObject from "search-object";
import { getProductById } from './getProductById';

 const GetFilteredProductsById=async (idList=[],filter="")=>{
    const productlist=[];
         for (const id of idList) {
            const product=await getProductById(id);
            productlist.push(product);
         }
       const filterProductlist= FilterProductList(productlist,filter)
    return filterProductlist;
 }
 
 export function FilterProductList(Productlist=[],filter="") {
    if (filter==="all") {
        filter=""
    }
    const filterList= Productlist.map(item=>{
       if (searchObject(item,filter)) {
           return item
       } 
    }).filter(item=>item!==undefined)
    return filterList;
}

export default GetFilteredProductsById;