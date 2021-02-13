import searchObject from "search-object";
//this function translates the price value to the query formate that json server can understand
 function translatePriceRange(val){
    const range={min:0,max:999}
    switch (val) {
        case "under $10":
        range.min=0;
        range.max=9;
        return range;
        case "$10-$20":
        range.min=10;
        range.max=20;
        return range;
        case "$21-$30":
        range.min=21;
        range.max=30;
        return range;
        case "above $30":
        range.min=30;
        range.max=999;
        return range;
        default:
            return range;
    }
} 

export  const preferencesFilterProducts=(products=[],preferences={})=>{
    const filteredProducts=products.filter(product=>{
        const checkFiltersArr=[];
        for (const [key,value] of Object.entries(preferences)){
            if (value==="All") {
                checkFiltersArr.push(true);
            }
            if (key==="price"&&value!=="All") {
                const priceRange=translatePriceRange(value)
                const checkPrice=product.price>=priceRange.min&&product.price<=priceRange.max;
                checkFiltersArr.push(checkPrice);
            }
           if(key!=="price"&&value!=="All") checkFiltersArr.push(searchObject(product,value)) 
        }
        return checkFiltersArr.every(ele=>ele);
    });
    return filteredProducts;
}