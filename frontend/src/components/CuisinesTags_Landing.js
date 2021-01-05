import  React  from 'react';
import CuisineTagDisplay from './CuisineTagDisplay';

const Cuisinestagslanding=(props)=>{
    const tags=props.cuisinesTags;

    return(
        <ul className="landing-page-menu list-inline text-center mx-2">
            {tags.map(tag=><CuisineTagDisplay cuisinesTag={tag}/>)} 
        </ul>
    )
}
export default Cuisinestagslanding;