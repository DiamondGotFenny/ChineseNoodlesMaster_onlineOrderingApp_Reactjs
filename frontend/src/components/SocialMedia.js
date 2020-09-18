import  React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia=(props)=>{
    const {iconContainer,icon,Link}=props.item;
    return(
        <a
        href={Link}
        className={`icon icon-social icon-circle icon-sm dark-icon mx-2 ${iconContainer}`}>
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}
export default SocialMedia;