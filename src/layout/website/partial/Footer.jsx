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
import whitestart from '../../../common/icon/whitestart.svg';
import EllipseIcon from '../../../common/icon/Ellipse 5.svg';
import SubscribeBg from '../../../common/icon/Subscribe.svg';
import CheckboxIcon from '../../../common/icon/checkbox.svg';
import LogoIcon from '../../../common/icon/logoicon.svg';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <Container>
                <div className="subsacribe-box">
                    <img src={LogoIcon} className="LogoIcon-footer" alt="" />
                    <img src={SubscribeBg} className="SubscribeBg" alt="" />
                    <Row className="subsacribe-content">
                        <Col md={12}>
                            <div className="subsscribe-box-style">
                                <span>
                                    <img src={EllipseIcon} alt="" />
                                </span>
                                <span className="Want-to-receive">Want to receive events &<br />news and updates?</span>
                            </div>
                            <div className="ml-5">
                                <div className="mt-4 mb-4 subsscribe-form-input-area">
                                    <input className="footer-input" type="text" placeholder="Name" />
                                    <input className="footer-input" type="text" placeholder="Email ID" />
                                </div>
                                <div className="mb-4">
                                    <span><img className="mr-4" src={CheckboxIcon} alt="" />I agree with the <span className="theme-color">privacy statement</span></span>
                                </div>
                                <div className="subscribe-btn">
                                    <Link className="button-join" to={'/'}>
                                        <span>
                                            <span className="bg-style"><img height={30} width={30} src={whitestart} /></span><span className="bg-style">Get the latest updates</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <footer className="footer-container">
                <div className="footer-head">
                    <Container>
                        <Row className="mb-5">
                            <Col md={12} className="">
                                <ul className="website_top_menu website_top_menu-footer text-center ">
                                    <li className="nav-item">
                                        <span className="">
                                            <img src={Whitestart} alt="" /> <span className="footer-title">Ready to host events ?</span>
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="button-join" to={'/'}>
                                            <span>
                                                <span className="bg-style-white"><img height={30} width={30} src={BluestarIcon} /></span><span className="bg-style-white">Create Event</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="button-join" to={'/'}>
                                            <span>
                                                <span className="bg-style-white"><img height={30} width={30} src={BluestarIcon} /></span><span className="bg-style-white">Find Events</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="footer-bottom-container">
                            <Col className="left-footer-logo-box" md={5}>
                                <div className="footer-left-box footer-box-style">
                                    <div className="mb-3"><img src={AppLogo} className="footer-logo" alt="" /></div>
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
                            <Col md={7} className="right-footer-logo-box">
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