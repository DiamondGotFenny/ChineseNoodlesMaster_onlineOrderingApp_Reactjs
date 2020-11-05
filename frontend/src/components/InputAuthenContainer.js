import React from 'react';
import { Button, Card, Container, Form, Row, Col, FormLabel, FormGroup } from 'react-bootstrap';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link } from 'react-router-dom';
import LoginBtn from 'components/LoginBtnOAthu';
import InputAuthen from 'components/InputAuthen';


const InputAuthenContainer=(props)=>{
    const btnInfo=[
        {btn_type:"btn-twitter",icon:faTwitter,text:"Login via Twitter"},
        {btn_type:"btn-facebook",icon:faFacebookF,text:"Login via Facebook"},
        {btn_type:"btn-google",icon:faGoogle,text:"Login via Google"},
        {btn_type:"btn-instagram",icon:faInstagram,text:"Login via Instagram"},
    ]
    
    const outputInputDetail=(link)=>{
        const inputData=[
            {id:"regit-name",name:"name",icon:faUser,type:"text",placeholder:"Your Name",ariaLabel:"your name",ariaDesr:"enter your name"},
            {id:"regit-email",name:"email",icon:faEnvelope,type:"email",placeholder:"Your Email",ariaLabel:"email",ariaDesr:"enter your email"},
            {id:"regit-phone",name:"tel",icon:faPhone,type:"tel",placeholder:"Your Phone Number",ariaLabel:"phone number",ariaDesr:"enter your phone number"},
            {id:"Password",name:"password",icon:faLock,type:"password",placeholder:"Enter Your Password",ariaLabel:"your password",ariaDesr:"enter your password"},
            {id:"regit-Password-confirm",name:"password_confirm",icon:faLock,type:"password",placeholder:"Confirm Your Password",ariaLabel:"your password",ariaDesr:"Confirm your password"},
        ]
        
        switch (link) {
            case "/login":
                return [ {id:"regit-email",name:"email",icon:faEnvelope,type:"email",placeholder:"Your Email",ariaLabel:"email",ariaDesr:"enter your email"},
                {id:"Password",name:"password",icon:faLock,type:"password",placeholder:"Enter Your Password",ariaLabel:"your password",ariaDesr:"enter your password"}];
            case "/register":
                return inputData
            default:
                break;
        }
    }

    const showFooter=(link)=>{
        if (link==="/login") {
            return(
            <FormGroup>
                <Button type="submit" className="btn btn-primary btn-block">
                    Login
                </Button>
                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        Don't have an account? <Link to={'/register'} className="ml-2">Sign Up</Link>
                    </div>
                    <div className="d-flex justify-content-center links">
                        <Link to="/">Forgot your password?</Link>
                    </div>
                </div>
            </FormGroup>)
            
        } else if(link==="/register"){
            return(
                <FormGroup>
                    <Row className="justify-content-start my-3">
                            <Col>
                                <div className="form-check">
                                    <FormLabel className="form-check-label">
                                        <FormCheckInput type="checkbox" checked={checkTerms} onChange={handleCheckBox} className="form-check-input"/>
                                        I Read and Accept <Link to={"/"}>Terms and Conditions</Link>
                                    </FormLabel>
                                </div>
                            </Col>
                    </Row>
                    <Button type="submit" disabled={!checkTerms} className="btn btn-primary btn-block">
                        Create Account
                    </Button>
                    <p class="text-center">Already Have An Account? <Link to={"/login"}>Log In</Link></p>
                </FormGroup>
                )
        }
    }

    const {onSubmit,inputVals,link,handleInputOnchange,handleCheckBox,checkTerms}=props;
    return (
        <Container>
            <Card className="bg-light mt-3 px-3 col-11 col-md-6 row">
                <Card.Body className="mx-auto col-11" style={{maxWidth: "600px"}}>
                    <p>
                        {btnInfo.map(item=><LoginBtn btnInfo={item}/>)}
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <h5 className="text-center mb-3">Get started with your free account</h5>
                    <Form onSubmit={(e)=>onSubmit(e,inputVals)}>
                        <Form.Group>
                            {outputInputDetail(link).map(data=><InputAuthen 
                            data={data} 
                            inputOnchange={handleInputOnchange} 
                            value={inputVals[data.name]}/>)}
                        </Form.Group>
                        
                       {showFooter(link)}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default InputAuthenContainer;