import React from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginBtn from 'components/LoginBtnOAthu';
import InputAuthen from 'components/InputAuthen';
import RegistFooter from './RegistFormFooter';
import LoginFormFooter from './LoginFormFooter';
import { btnInfo, registFormDetails, loginFormDetails } from 'services/inputsFormRenderInfo';


const InputAuthenContainer=(props)=>{

    const renderControl=(link,check,errors,handleCheckBox)=>{
       const  registerForm={
            renderInputs: registFormDetails,
            renderMiddleTxt:"Get started with your free account",
            renderFooter: <RegistFooter 
                            check={check} 
                            handleCheckBox={handleCheckBox} 
                            errors={errors}/>
        };
       const loginForm={
            renderInputs: loginFormDetails,
            renderMiddleTxt:"Login with your own account",
            renderFooter: <LoginFormFooter 
                            check={check} 
                            handleCheckBox={handleCheckBox} 
                            />
        }
        switch (link) {
            case "/login":
                return loginForm;
            case "/register":
                return registerForm;
            default:
                break;
        }
    }
    
    const {onSubmit,inputVals,errors,link,handleInputOnchange,handleCheckBox,check}=props;
    const renderInfo=renderControl(link,check,errors,handleCheckBox);
    return (
        <Container>
            <Card className="bg-light mt-3 px-3 col-11 col-md-6 row">
                <Link to={"/"}>Back</Link>
                <Card.Body className="mx-auto col-11" style={{maxWidth: "600px"}}>
                    <p>
                        {btnInfo.map(item=><LoginBtn key={item.btn_type} btnInfo={item}/>)}
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <h5 className="text-center mb-3">{renderInfo.renderMiddleTxt}</h5>
                    <Form onSubmit={(e)=>onSubmit(e,inputVals,check)}>
                        <Form.Group >
                            {renderInfo.renderInputs.map(data=><InputAuthen 
                                key={data.id}
                                data={data} 
                                inputOnchange={handleInputOnchange} 
                                value={inputVals[data.name]}
                                error={errors[data.name]}
                            />)}
                        </Form.Group>
                       {renderInfo.renderFooter}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default InputAuthenContainer;