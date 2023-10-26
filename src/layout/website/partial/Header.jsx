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
const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col md={12} className="pt-3 pb-3 bg-white">
                            <ul className="website_top_menu float-right">
                                <li className="nav-item">
                                    <Link className="button-border" to={'/'}>
                                        <span>
                                            <img src={LocationsIcon} /> Location <img src={Locationstart} />
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="button-join" to={'/'}>
                                        <span>
                                            <span className="bg-style"><img height={30} width={30} src={PersonIcon} /></span><span className="bg-style">My Account</span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <div className="float-left">
                                <Link to={'/'}>
                                    <span>
                                        <img src={AppLogo} />
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