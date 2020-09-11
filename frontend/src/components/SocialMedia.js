import  React  from 'react';

const SocialMedia=(props)=>{
    const {iconContainer,icon,Link}=props.item;
    return(
        <a
        href={Link}
        className={`icon icon-social icon-circle icon-sm dark-icon mx-2 ${iconContainer}`}>
            <i className={icon}></i>
        </a>
    )
}
export default SocialMedia;