import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Container, Form, InputGroup, FormControl, Row, Col, FormLabel, FormGroup } from 'react-bootstrap';
import { faFacebookF, faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link } from 'react-router-dom';

const Login=()=>{
    return (
        <Container>
            <Card className="bg-light mt-3 px-3 col-11 col-md-6 row">
                <Card.Body className="mx-auto col-11" style={{maxWidth: "600px"}}>
                    <p>
                        <Button className="btn btn-block btn-twitter">
                            <FontAwesomeIcon icon={faTwitter} /> Login via Twitter
                        </Button>
                        <Button className="btn btn-block btn-facebook">
                            <FontAwesomeIcon icon={faFacebookF} /> Login via Facebook
                        </Button>
                        <Button className="btn btn-block btn-google">
                            <FontAwesomeIcon icon={faGoogle} /> Login via Google
                        </Button>
                        <Button className="btn btn-block btn-instagram">
                            <FontAwesomeIcon icon={faInstagram} /> Login via Instagram
                        </Button>
                    </p>
                    <p className="divider-text">
                        <span className="bg-light">OR</span>
                    </p>
                    <h5 className="text-center mb-3">Login With Your Account</h5>
                    <Form>
                        <Form.Group>
                        
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="email"
                                    placeholder="Your Email"
                                    aria-label="email"
                                    aria-describedby="enter your email"
                                />
                            </InputGroup>
                            
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="regit-Password">
                                        <FontAwesomeIcon icon={faLock} />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    type="password"
                                    placeholder="Your password"
                                    aria-label="password"
                                    aria-describedby="enter your password"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Row className="justify-content-start my-3">
                            <Col>
                                <div className="form-check">
                                    <FormLabel className="form-check-label">
                                        <FormCheckInput type="checkbox" className="form-check-input"/>
                                        Remember me
                                    </FormLabel>
                                </div>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Button type="submit" className="btn btn-primary btn-block">
                                Login
                            </Button>
                        </FormGroup>
                    </Form>
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <Link to={'/register'} className="ml-2">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <Link to="/">Forgot your password?</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login;