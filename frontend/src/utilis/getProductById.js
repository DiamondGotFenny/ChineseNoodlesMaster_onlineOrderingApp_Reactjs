import  httpService  from 'services/httpService';

export const getProductById= id=>{
    const product_endpoint=`/produtList?id=${id}`;
    const product= fetchProduct(product_endpoint,id);
    return product;
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