import React ,{useState,useEffect} from 'react';
import { Card, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginBtn from 'components/LoginBtnOAthu';
import InputAuthen from 'components/InputAuthen';
import RegistFooter from './RegistFormFooter';
import LoginFormFooter from './LoginFormFooter';
import { btnInfo, registFormDetails, loginFormDetails } from 'services/inputsFormRenderInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction,userLoginAction } from 'actions/userAction';
import  history  from 'services/history';
import { validateInputs } from 'services/formValidation';


const InputAuthenContainer=(props)=>{
    const {link,inputItems}=props;
    const dispatch=useDispatch();
    const authInfo=useSelector(state=>state.authInfo)
    const userInfo=useSelector(state=>state.userInfo);
    const [check,setCheck]=useState(false)
    const [inputVals,setInputVals]=useState(inputItems);
    const [errors,setErrors]=useState(inputItems);

    const handleInputOnchange= (e)=>{
        //replace the value of relative input according to its name attri
        setInputVals({...inputVals,[e.target.name]:e.target.value});
        const errorMsg=validateInputs(e.target.name,e.target.value);
        setErrors({...errors,[e.target.name]:errorMsg})
    }


    const handleCheckBox=()=>{
        setCheck(check=>!check)
    }

    useEffect(()=>{
       
        if (authInfo.status==="sucess"&&userInfo.status!=="error") {
            history.push("/")
        }

        return () => {
            //
          };
      
    },[authInfo.status])

    const renderControl=(link,check,errors,handleCheckBox,inputVals)=>{
       const  registerForm={
            renderInputs: registFormDetails,
            renderMiddleTxt:"Get started with your free account",
            renderFooter: <RegistFooter 
                            check={check} 
                            handleCheckBox={handleCheckBox} 
                            errors={errors}/>,
            handleSubmit:   function (e,inputVals) {
                e.preventDefault();
                dispatch(userRegisterAction(inputVals));
            }
        };
       const loginForm={
            renderInputs: loginFormDetails,
            renderMiddleTxt:"Login with your own account",
            renderFooter: <LoginFormFooter 
                            check={check} 
                            handleCheckBox={handleCheckBox} 
                            />,
            handleSubmit:   function (e,inputVals,check) {
                e.preventDefault();
                dispatch(userLoginAction(inputVals,check));
             }                 
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
    
    
    const renderInfo=renderControl(link,check,errors,handleCheckBox,inputVals);
    return (
        <Container className="user-form-container">
            <Card className="bg-light mt-3 px-3 col-11 col-md-6 row user-form">
                <Link to={"/"} className='back-icon' ><FontAwesomeIcon icon={faChevronCircleLeft} size='lg' /></Link>
                <Card.Body className="mx-auto col-11" style={{maxWidth: "600px"}}>
                    <p>
                        {btnInfo.map(item=><LoginBtn key={item.btn_type} btnInfo={item}/>)}
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <h5 className="text-center mb-3">{renderInfo.renderMiddleTxt}</h5>
                    <Form onSubmit={(e)=>renderInfo.handleSubmit(e,inputVals,check)}>
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