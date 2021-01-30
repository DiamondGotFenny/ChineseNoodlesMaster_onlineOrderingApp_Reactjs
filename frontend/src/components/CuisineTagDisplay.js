import  React  from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CuisineTagDisplay = (props) => {
    const tag=props.cuisinesTag;
    const removeTagSpace=(tag)=>{
        const tagStr=tag.replace(/\s/g, '').toLowerCase();
        return tagStr;
      }
    const adrs=useSelector(state=>state.address_input);
    return ( 
        <li key={tag} className="list-inline-item"><Link to={`/products?q=${removeTagSpace(tag)}&address=${adrs}`}>{tag}</Link></li>
     );
}
 
export default CuisineTagDisplay;