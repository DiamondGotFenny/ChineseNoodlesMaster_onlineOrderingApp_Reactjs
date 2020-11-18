import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const name={id:"regit-name",name:"name",icon:faUser,type:"text",placeholder:"Your Name",ariaLabel:"your name",ariaDesr:"enter your name"};
const email={id:"regit-email",name:"email",icon:faEnvelope,type:"email",placeholder:"Your Email",ariaLabel:"email",ariaDesr:"enter your email"};
const phoneNum={id:"regit-phone",name:"tel",icon:faPhone,type:"tel",placeholder:"Your Phone Number",ariaLabel:"phone number",ariaDesr:"enter your phone number"};
const password={id:"Password",name:"password",icon:faLock,type:"password",placeholder:"Enter Your Password",ariaLabel:"your password",ariaDesr:"enter your password"};
const password_confirm={id:"regit-Password-confirm",name:"password_confirm",icon:faLock,type:"password",placeholder:"Confirm Your Password",ariaLabel:"your password",ariaDesr:"Confirm your password"};


export const btnInfo=[
    {btn_type:"btn-twitter",icon:faTwitter,text:"Login via Twitter"},
    {btn_type:"btn-facebook",icon:faFacebookF,text:"Login via Facebook"},
    {btn_type:"btn-google",icon:faGoogle,text:"Login via Google"},
    {btn_type:"btn-instagram",icon:faInstagram,text:"Login via Instagram"},
];

export const registFormDetails=[name,email,phoneNum,password,password_confirm];
export const loginFormDetails=[email,password];