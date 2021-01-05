import  React  from 'react';
import CuisineTagDisplay from './CuisineTagDisplay';

const CuisinesTagsCollapsed=(props)=>{
    const tags=props.tagsCollapsed;
   
    return (
      <div id="landing-page-menu-collapsed">
            <ul
              className="landing-page-menu landing-page-menu-collapsed list-inline text-center mx-2"
            >
                {tags.map(tag=><CuisineTagDisplay cuisinesTag={tag}/>)};
            </ul>
        </div> 
    )
}
export default CuisinesTagsCollapsed;