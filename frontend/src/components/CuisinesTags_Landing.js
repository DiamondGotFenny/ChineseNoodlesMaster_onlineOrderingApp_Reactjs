import  React  from 'react';

const Cuisinestagslanding=(props)=>{
    const tags=props.cuisinesTags;
    return(
        <ul className="landing-page-menu list-inline text-center mx-2">
            {tags.map(tag=><li key={tag} className="list-inline-item"><button>{tag}</button></li>)} 
        </ul>
    )
}
export default Cuisinestagslanding;