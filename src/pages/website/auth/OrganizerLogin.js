import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import { Link,useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {apiurl,app_url,isEmail,organizer_url} from '../../../common/Helpers';
const Home = ({ title }) => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const [LoginEmail, setLoginEmail] = useState();
    const [LoginPassword, setLoginPassword] = useState();
    const [Loader, setLoader] = useState(false);
    const HandelOrganizerLogin = async () => {
        try {
            if(!LoginEmail){
                return toast.error('Email is required');
            }
            if(!isEmail(LoginEmail)){
                return toast.error('Enter valid email address');
            }
            if(!LoginPassword){
                return toast.error('Password is required');
            }
            setLoader(true);
            const requestData = {
                email: LoginEmail,
                password: LoginPassword
              };
            fetch(apiurl + 'auth/organizer/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header to JSON
                },
                body: JSON.stringify(requestData),
              })
            .then(response => response.json())
            .then(data => {
                setLoader(false);
                if (data.success == true) {
                localStorage.setItem('customerauth', data.token);
                toast.success('Login successful', {
                    duration: 3000,
                });
                navigate(app_url);
                }else{
                    toast.error(data.message);
                }
            })
            .catch(error => {
                setLoader(false);
                toast.error('Insert error: ' + error.message);
                console.error('Insert error:', error);
            });
        } catch (error) {
            console.error('Login api error:', error);
        }
    };
    return (
        <>
            <div className="signup-form-section mt-5 mb-5">
                <Container>
                    <Row className="signup-form-box">
                        <Col md={12} className="login-area signup-page-padding">
                            <Row>
                                <Col md={3}></Col>
                                <Col md={6}>
                                <div className="login-area-sec">
                                <h3 className="signup-page-title">Welcome back</h3>
                                <p className="signup-page-desc">
                                    Do you already have an account? please log in with your email address.
                                </p>
                            </div>
                            <div className="login-area-form-sec">
                                <div className="form-group">
                                    <p>Email address</p>
                                    <input className="form-control" type="text" placeholder="Email Address" onChange={(e) =>setLoginEmail(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <p>Password</p>
                                    <input className="form-control" type="password" placeholder="Password" onChange={(e) =>setLoginPassword(e.target.value)}></input>
                                </div>
                                <p className="forgot-password-text">Forgot your password? <Link className='reset-password-link'>Reset your password</Link></p>
                                <Link to={app_url+'auth/customer/signup'} className='signup-page-btn'>
                                    <p className="forgot-password-text">Want to login as ticket buyer or create new account? <Link to={app_url+'auth/customer/signup'} className='reset-password-link'>Login/Signup</Link></p>
                                </Link>
                                <div className="form-group">
                                    {Loader ? (
                                        <Button className='signup-page-btn'>Please wait...</Button>
                                    ) : (
                                        <Button  className='signup-page-btn' onClick={HandelOrganizerLogin}>Log in</Button>
                                    )}
                                </div>
                            </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Home;