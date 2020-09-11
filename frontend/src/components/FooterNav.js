import  React  from 'react';

const FooterNav=(props)=>{
    const {text,link}=props.item;
    return(
        <li>
            <a href={link}>{text}</a>
        </li>
    )
}
export default FooterNav;