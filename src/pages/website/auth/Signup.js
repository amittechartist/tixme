import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import WhitestarBtn from '../../../component/Whitestarbtn';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth, googleProvider, facebookProvider } from '../../../firebase';
import { signInWithPopup } from 'firebase/auth';
import PersonIcon from '../../../common/icon/person 1.svg';
import GoogleLogo from '../../../common/icon/google.png';
import FacebookLogo from '../../../common/icon/facebook.png';
import { apiurl, app_url, isEmail, organizer_url } from '../../../common/Helpers';
const Home = ({ title }) => {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
    const [LoginEmail, setLoginEmail] = useState();
    const [LoginPassword, setLoginPassword] = useState();
    const [Firstname, setFirstname] = useState();
    const [Lastname, setLastname] = useState();
    const [Email, setEmail] = useState();
    const [Confirmemail, setConfirmemail] = useState();
    const [Phonenumber, setPhonenumber] = useState();
    const [Message, setMessage] = useState();
    const [Password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();
    const [WhatsappNumber, setWhatsappNumber] = useState();
    const [Address1, setAddress1] = useState();
    const [Pincode, setPincode] = useState();
    const [City, setCity] = useState();
    const [State, setState] = useState();
    const [Country, setCountry] = useState();
    const [Terms, setTerms] = useState(1);
    const [Marketing, setMarketing] = useState(1);

    const [Loader, setLoader] = useState(false);
    const [SignupUseroption, setSignupUseroption] = useState({ value: '2', label: "Ticket buyer" });
    const [SignupUseroptionid, setSignupUseroptionid] = useState(2);
    const handlePhoneChange = (newPhone) => {
        setPhonenumber(newPhone);
    };
    // const handlePhoneChange = (event) => {
    //     const inputValue = event.target.value;
    //     const numericValue = inputValue.replace(/\D/g, "");
    //     const limitedValue = numericValue.slice(0, 10);
    //     setPhonenumber(limitedValue);
    // };
    const HandelCustomerLogin = async () => {
        try {
            if (!LoginEmail) {
                return toast.error('Email is required');
            }
            if (!isEmail(LoginEmail)) {
                return toast.error('Enter valid email address');
            }
            if (!LoginPassword) {
                return toast.error('Password is required');
            }
            setLoader(true);
            const requestData = {
                email: LoginEmail,
                password: LoginPassword
            };
            fetch(apiurl + 'auth/customer/login', {
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
                        localStorage.setItem('userauth', data.token);
                        localStorage.setItem('user_role', 1);
                        toast.success('Login successful', {
                            duration: 3000,
                        });
                        navigate(app_url);
                    } else {
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
    const HandelOrganizersignup = async () => {
        try {
            if (!Firstname || !Lastname || !Email || !Confirmemail || !Phonenumber) {
                return toast.error('Required field must not be empty');
            }
            if (!isEmail(Email)) {
                return toast.error('Enter valid email address');
            }
            if (!isEmail(Confirmemail)) {
                return toast.error('Enter valid confirm email address');
            }
            if (Email === Confirmemail) {

            } else {
                return toast.error('Email and confirm email must me same');
            }
            setLoader(true);
            const requestData = {
                first_name: Firstname,
                last_name: Lastname,
                email: Email,
                phone_number: Phonenumber,
                area_code: "+91",
                agree_to_terms: 1,
                isactive: 0
            };
            fetch(apiurl + 'auth/organizer/signup', {
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
                        MySwal.fire({
                            icon: 'success',
                            title: '',
                            text: 'Your information has been received, we shall get back shortly! We are working on curating your extraordinary event. Please contact us for any further details or concerns.',
                        }).then((result) => {
                            navigate(app_url);
                        });
                    } else {
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

    }
    const HandelCustomersignup = async () => {
        try {
            if (!Firstname || !Lastname || !Email || !Confirmemail || !Phonenumber || !Password || !ConfirmPassword) {
                return toast.error('Required field must not be empty');
            }
            if (!isEmail(Email)) {
                return toast.error('Enter valid email address');
            }
            if (!isEmail(Confirmemail)) {
                return toast.error('Enter valid confirm email address');
            }
            if (Email === Confirmemail) {

            } else {
                return toast.error('Email and confirm email must me same');
            }

            if (Password.length > 7) {

            } else {
                return toast.error('Password must be at least 8 characters long');
            }
            if (Password === ConfirmPassword) {

            } else {
                return toast.error('Password and confirm password not match');
            }
            setLoader(true);
            const requestData = {
                first_name: Firstname,
                last_name: Lastname,
                email: Email,
                phone_number: Phonenumber,
                area_code: "+91",
                whatsapp_no: WhatsappNumber ? WhatsappNumber : '',
                address: Address1 ? Address1 : '',
                city: City ? City : '',
                state: State ? State : '',
                country: Country ? Country : '',
                pincode: Pincode,
                agree_to_terms: 1,
                agree_to_receive_marketing: 1,
                password: Password
            };
            fetch(apiurl + 'auth/customer/signup', {
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
                        toast.success('Account created successfully', {
                            duration: 3000,
                        });
                        navigate(app_url);
                    } else {
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
    }

    const handleFacebookLogin = async () => {
        toast.error("Contact your developer");
    }
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Access user information
            const email = user.email;
            const displayName = user.displayName;
            const uid = user.uid;
            const photoURL = user.photoURL;

            if (email) {
                try {
                    setLoader(true);
                    const requestData = {
                        email: email,
                        name: displayName,
                        profilepic: photoURL
                    };
                    fetch(apiurl + 'auth/customer/login-google', {
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
                                localStorage.setItem('userauth', data.token);
                                localStorage.setItem('user_role', 1);
                                toast.success('Login successful', {
                                    duration: 3000,
                                });
                                navigate(app_url);
                            } else {
                                toast.error(data.message);
                            }
                        })
                        .catch(error => {
                            setLoader(false);
                            // toast.error('Insert error: ' + error.message);
                            console.error('Insert error:', error);
                        });
                } catch (error) {
                    console.error('Login api error:', error);
                }
            } else {
                toast.error("Something wrong!");
            }

        } catch (error) {
            console.error(error.message);
        }
    };
    const userOption = [
        {
            options: [
                { value: '2', label: "Ticket buyer" },
                { value: '1', label: "Organizer" }
            ]
        }
    ]
    const signupUseroption = (selectedValue) => {
        setSignupUseroption(selectedValue);
        setSignupUseroptionid(selectedValue.value);
    };
    return (
        <div className="content-data">
            <div className="signup-form-section mt-5 mb-5">
                <Container>
                    <Row className="signup-form-box">
                        <Col md={6} className="login-area signup-page-padding">
                            <div className="login-area-sec">
                                <h3 className="signup-page-title">Welcome back</h3>
                                <p className="signup-page-desc">
                                    Do you already have an account? please log in with your email address.
                                </p>
                            </div>
                            <div className="login-area-form-sec">
                                <div className="form-group">
                                    <p>Email address</p>
                                    <input className="form-control" type="text" placeholder="Email Address" onChange={(e) => setLoginEmail(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <p>Password</p>
                                    <input className="form-control" type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}></input>
                                </div>
                                <p className="forgot-password-text">Forgot your password? <Link className='reset-password-link'>Reset your password</Link></p>

                                <p className="forgot-password-text">Want to login as organizer? <Link to={app_url + 'auth/organizer/login'} className='reset-password-link'>Login</Link></p>

                                <div className="form-group">
                                    {Loader ? (
                                        <span>
                                            <WhitestarBtn title={'Please wait...'} />
                                        </span>
                                    ) : (
                                        <span onClick={HandelCustomerLogin}>
                                            <WhitestarBtn title={'Login'} />
                                        </span>
                                    )}
                                </div>
                                <div className="border-bottom py-2"></div>
                                <div className="text-center">
                                    <p className="reset-password-link text-center pt-3">Login with</p>
                                </div>
                                <div className="text-center">
                                    <Row>
                                        <Col md={12}>
                                            <button className="login-with-btn mx-1" onClick={handleGoogleLogin}><img src={GoogleLogo}></img></button>
                                            <button className="login-with-btn mx-1" onClick={handleFacebookLogin}><img src={FacebookLogo}></img></button>
                                        </Col>

                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="signup-area signup-page-padding">
                            <div className="login-area-sec">
                                <h3 className="signup-page-title">Create an account</h3>
                                <p className="signup-page-desc">
                                    Create an account for free
                                </p>
                            </div>
                            <div className="login-area-form-sec">
                                <div className="form-group">
                                    <p>Are you an organizer ot ticket buyer? <span className="text-danger">*</span></p>
                                    <Select
                                        isClearable={false}
                                        options={userOption}
                                        className='react-select'
                                        classNamePrefix='select'
                                        onChange={signupUseroption}
                                        value={SignupUseroption}
                                    />
                                </div>
                                {SignupUseroptionid == 1 ? (
                                    <div>
                                        <div className="form-group">
                                            <p>First Name <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="First Name" value={Firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Last Name <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Last Name" value={Lastname} onChange={(e) => setLastname(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Email address <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Email Address" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Confirm Email address <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Confirm email Address" value={Confirmemail} onChange={(e) => setConfirmemail(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Phone number <span className="text-danger">*</span></p>
                                            {/* <input pattern="[0-9]{10}" maxLength={10} className="form-control" type="number" placeholder="Phone number" value={Phonenumber} onChange={handlePhoneChange}></input> */}
                                            <PhoneInput
                                                country={'us'}
                                                className="phone-number-with-code"
                                                enableSearch={true}
                                                placeholder={'Phone number'}
                                                autoFormat={true}
                                                value={Phonenumber}
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <p>Message</p>
                                            <textarea class="form-control" rows="3" value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                        {Loader ? (
                                            <WhitestarBtn title={'Please wait...'} />
                                        ) : (
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <span onClick={HandelOrganizersignup}>
                                                        <WhitestarBtn title={'Create Account'} />
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <div className="form-group">
                                            <p>First Name <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="First Name" value={Firstname} onChange={(e) => setFirstname(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Last Name <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Last Name" value={Lastname} onChange={(e) => setLastname(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Email address <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Email Address" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Confirm Email address <span className="text-danger">*</span></p>
                                            <input className="form-control" type="text" placeholder="Confirm email Address" value={Confirmemail} onChange={(e) => setConfirmemail(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Phone number <span className="text-danger">*</span></p>
                                            {/* <input className="form-control" type="number" placeholder="Phone number" value={Phonenumber} onChange={handlePhoneChange}></input> */}
                                            <PhoneInput
                                                country={'us'}
                                                className="phone-number-with-code"
                                                enableSearch={true}
                                                placeholder={'Phone number'}
                                                autoFormat={true}
                                                value={Phonenumber}
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <p>Password <span className="text-danger">*</span></p>
                                            <input className="form-control" type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Confirm Password <span className="text-danger">*</span></p>
                                            <input className="form-control" type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>WhatsApp no</p>
                                            <input className="form-control" type="number" placeholder="WhatsApp no" value={WhatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Address Line 1 </p>
                                            <input className="form-control" type="text" placeholder="Address Line 1" value={Address1} onChange={(e) => setAddress1(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <p>Pincode</p>
                                            <input className="form-control" type="text" placeholder="Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)}></input>
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={(e) => setTerms(e.target.value)} />
                                            <label class="form-check-label" for="exampleCheck1">Agree to terms, privacy policy</label>
                                        </div>

                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck2" onChange={(e) => setMarketing(e.target.value)} />
                                            <label class="form-check-label" for="exampleCheck2">Agree to receive marketing</label>
                                        </div>
                                        {Loader ? (
                                            <WhitestarBtn title={'Please wait...'} />
                                        ) : (
                                            <div className="form-group">
                                                <span onClick={HandelCustomersignup}>
                                                    <WhitestarBtn title={'Create Account'} />
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
export default Home;