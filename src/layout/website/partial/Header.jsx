import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationsIcon from '../../../common/icon/locations.svg';
import Locationstart from '../../../common/icon/locationstart.svg';
import PersonIcon from '../../../common/icon/person 1.svg';
import AppLogo from '../../../common/logo.svg';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar'
import {app_url} from '../../../common/Helpers';
const Header = () => {
    const customer_token = localStorage.getItem('customerauth');
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col md={12} className="pt-3 pb-3 bg-white">
                            <ul className="website_top_menu float-right">
                                <li className="nav-item">
                                <Link to={app_url}><img className="header-logo mobile-screen" src={AppLogo} /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="button-border" to={'/'}>
                                        <span>
                                            <img src={LocationsIcon} /> Location <img src={Locationstart} />
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {customer_token ?
                                    (
                                        <Link className="button-join" to={'/'}>
                                            <span>
                                                <span className="bg-style"><img height={30} width={30} src={PersonIcon} /></span><span className="bg-style">My Account</span>
                                            </span>
                                        </Link>
                                    ) : 
                                    (
                                        <Link className="button-join" to={app_url+'auth/customer/signup'}>
                                            <span>
                                                <span className="bg-style"><img height={30} width={30} src={PersonIcon} /></span><span className="bg-style">Login</span>
                                            </span>
                                        </Link>
                                    )
                                    }
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <div className="float-left">
                                <Link to={app_url}>
                                    <span>
                                        <img className="header-logo big-screen" src={AppLogo} />
                                    </span>
                                </Link>
                            </div>
                        </Col>
                        <Sidebar/>
                    </Row>
                </Container>
            </header>
        </>
    )
}
export default Header;