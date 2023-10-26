import React from "react";
import AppLogo from '../../../common/logo.svg';
import Whitestart from '../../../common/icon/whitestart.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BluestarIcon from '../../../common/icon/locationstart.svg';
import facebookicon from '../../../common/icon/social/facebookicon.svg';
import Instagramicon from '../../../common/icon/social/instagramicon.svg';
import Whatsappicon from '../../../common/icon/social/whatsappicon.svg';
import Youtubeicon from '../../../common/icon/social/youtubeicon.svg';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-head">
                    <Row className="mb-5">
                        <Col md={12} className="">
                            <ul className="website_top_menu text-center ">
                                <li className="nav-item">
                                    <span className="">
                                        <img src={Whitestart} alt="" /> <span className="footer-title">Ready to host events ?</span>
                                    </span>
                                </li>
                                <li className="nav-item">
                                    <Link className="button-join" to={'/'}>
                                        <span>
                                            <span className="bg-style-white"><img height={30} width={30} src={BluestarIcon} /></span><span className="bg-style-white">My Account</span>
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="button-join" to={'/'}>
                                        <span>
                                            <span className="bg-style-white"><img height={30} width={30} src={BluestarIcon} /></span><span className="bg-style-white">My Account</span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Container fluid>
                        <Row className="footer-bottom-container">
                            <Col md={5} style={{ paddingRight: "30px" }}>
                                <div className="footer-left-box footer-box-style">
                                    <div className="mb-3"><img src={AppLogo} alt="" /></div>
                                    <div><p className="Welcome_to_text">Welcome to TIXME, where every ticket tells a story! Our<br />mission is to redefine events, making each occasion an<br />unforgettable and cherished memory.</p></div>
                                    <div className="footer-icon-container">
                                        <ul>
                                            <li className="d-inline-block">
                                                <img src={facebookicon} alt="" />
                                            </li>
                                            <li className="d-inline-block ml-3">
                                                <img src={Instagramicon} alt="" />
                                            </li>
                                            <li className="d-inline-block ml-3">
                                                <img src={Whatsappicon} alt="" />
                                            </li>
                                            <li className="d-inline-block ml-3">
                                                <img src={Youtubeicon} alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-short-text">
                                        <p>© 2023 Eventbrite</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={7}>
                                <Row className="footer-right-box  footer-box-style">
                                    <Col md={6}>
                                        <span className="footer-box-style-title">Find Events</span>
                                        <ul>
                                            <li>Browse Online Events</li>
                                            <li>Get the Eventbrite App</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <span className="footer-box-style-title">Connect With Us</span>
                                        <ul>
                                            <li>Report This Event</li>
                                            <li>Help Center</li>
                                            <li>Terms</li>
                                            <li>Privacy</li>
                                            <li>Accessibility</li>
                                            <li>Community Guidelines</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}
export default Footer;