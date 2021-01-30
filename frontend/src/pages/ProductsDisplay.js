import PromotionFilter from 'containers/ProductDisplay/PromotionFilter';
import Contents from 'containers/ProductDisplay/Contents';
import PageHighlight from 'containers/ProductDisplay/PageHighlight';
import  React from 'react';
const ProductsDisplay=()=>{
    return (
        <div className="productDisplay-container" >
            <PageHighlight />
            <PromotionFilter/>
            <Contents/>
        </div>
    )
}
export default ProductsDisplay;