import  React  from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Button,  Row, Col, FormLabel, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RegistFooter=(props)=>{
    const {check,handleCheckBox,errors}=props;
    const validateSubmit=(errors,check)=>{
        const hasErr=Object.values(errors).every(err=>err===undefined);
        const canSubmit=hasErr&&check
       return !canSubmit;
    }
    return (
        <FormGroup>
            <Row className="justify-content-start my-3">
                    <Col>
                        <div className="form-check">
                            <FormLabel className="form-check-label">
                                <FormCheckInput type="checkbox" checked={check} onChange={handleCheckBox} className="form-check-input"/>
                                I Read and Accept <Link to={"/"}>Terms and Conditions</Link>
                            </FormLabel>
                        </div>
                    </Col>
            </Row>
            <Button type="submit" disabled={validateSubmit(errors,check)} className="btn btn-primary btn-block">
                Create Account
            </Button>
            <p class="text-center">Already Have An Account? <Link to={"/login"}>Log In</Link></p>
        </FormGroup>
    )
}
export default RegistFooter;