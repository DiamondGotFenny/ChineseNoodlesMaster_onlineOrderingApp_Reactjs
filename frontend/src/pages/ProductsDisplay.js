import ContentFilter from 'containers/ProductDisplay/ContentFilter';
import Contents from 'containers/ProductDisplay/Contents';
import PageHighlight from 'containers/ProductDisplay/PageHighlight';
import  React from 'react';
const ProductsDisplay=()=>{
    return (
        <div className="productDisplay-container" >
            <PageHighlight />
            <ContentFilter/>
            <Contents/>
        </div>
    )
}
export default ProductsDisplay;