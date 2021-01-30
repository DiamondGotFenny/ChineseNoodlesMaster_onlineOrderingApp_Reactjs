import searchObject from "search-object";
import  httpService  from 'services/httpService';

 const GetFilterMenu=async (fullMenu=[],filter="")=>{
    const productlist=[];
         for (const id of fullMenu) {
            const product_endpoint=`/produtList?id=${id}`;
            const product=await fetchProduct(product_endpoint,id);
            productlist.push(product);
         }
       const filterProductlist= FilterProductList(productlist,filter)
    return filterProductlist;
 }
 function FilterProductList(Productlist=[],filter="") {
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
async function fetchProduct(query,id) {
    try {
        const {data}=await httpService.get(query);
        const product=data.find(product=>product.id===id);
        return product;
    } catch (error) {
        console.error(error.response);
    }
    
}
export default GetFilterMenu;