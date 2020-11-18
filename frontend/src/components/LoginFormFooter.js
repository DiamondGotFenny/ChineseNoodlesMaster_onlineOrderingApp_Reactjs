import  React  from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Button,  Row, Col, FormLabel, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const LoginFormFooter=(props)=>{
    const {check,handleCheckBox}=props;
    return (
        <FormGroup>
            <Row className="justify-content-start my-3">
                    <Col>
                        <div className="form-check">
                            <FormLabel className="form-check-label">
                                <FormCheckInput type="checkbox" checked={check} onChange={handleCheckBox} className="form-check-input"/>
                                Remember Me
                            </FormLabel>
                        </div>
                    </Col>
            </Row>
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
            </FormGroup>
    )
}
export default LoginFormFooter;