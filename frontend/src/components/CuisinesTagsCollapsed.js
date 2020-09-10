import  React  from 'react';

const CuisinesTagsCollapsed=(props)=>{
    const tags=props.tagsCollapsed;
    return (
      <div id="landing-page-menu-collapsed">
            <ul
              className="landing-page-menu landing-page-menu-collapsed list-inline text-center mx-2"
            >
                {tags.map(tag=><li key={tag} class="list-inline-item"><button>{tag}</button></li>)};
            </ul>
        </div> 
    )
}
export default CuisinesTagsCollapsed;