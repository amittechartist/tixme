import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoogleIcon from '../../common/icon/googleicon.svg';
import OurPartnerIcon from '../../common/icon/Our Partner.svg';
import MusicIcon from '../../common/icon/Music.svg';
import TicketIcon from '../../common/icon/Ticket vector.svg';
import FindnearByEvents from '../../common/icon/findnear By Events.svg';
import Eventlogo from '../../common/icon/eventlogo.svg';
import Timelogo from '../../common/icon/time 1.svg';
import Hourglasslogo from '../../common/icon/hourglass.svg';
import LocationIcon from '../../common/icon/location.svg';
import Eventimg from '../../common/event.jpg';
import DateIcon from '../../common/icon/date 2.svg';
import EllipseIcon from '../../common/icon/Ellipse 5.svg';
const Home = ({ title }) => {
    return (
        <>
            <div className="home_banner">
                <Container>
                    <Row>
                        <Col>
                            <p className="banner_shop_desc"><span className="bullet-point"></span> Safe, secure, reliable ticketing.Your ticket to live entertainment !</p>
                            <p className="banner_text">
                                Get Ready for <span className="text-blue">Unforgettable</span><br />Experiences : Your Ticket to<br />Exceptional Events !
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5 mb-5">
                <Container>
                    <div className="find-nearby-section">
                        <Row>
                            <Col md={12}>
                                <h3 className="find-near-box">Find Near By Events</h3>
                            </Col>
                            <Col md={12} className="pt-2 pb-5 ml-5 Find-Near-form">
                                <select name="" id="" className="theme-dropdown">
                                    <option value="">Category</option>
                                </select>
                                <select name="" id="" className="theme-dropdown">
                                    <option value="">Location</option>
                                </select>
                                <input type="text" className="theme-input" placeholder="Search anything" />
                            </Col>
                            <Col md={12} className="mt-5">
                                <div className="category-section text-center">
                                    <ul>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                        <li className="d-inline-block mx-2">
                                            <div className="category-items-box">
                                                <img className="ticket-category-bg" src={MusicIcon} alt="" />
                                                <img className="ticket-bg" src={TicketIcon} alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="event-category-section">
                <Container className="event-list-bg">
                    <span className="event-title-home"><img src={EllipseIcon} alt="" /> Events</span>
                    <Row className="event-box-mobile">
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='mb-3'>
                            <div className="event-box-style">
                                <div className="event-image-part">
                                    <img className="event-image" src={Eventimg} alt="" />
                                    <span className="event-category-img">Party</span>
                                    <span className="on-img-date"><img src={DateIcon} alt="" /><span className="on-img-date-val">26 Jan</span></span>
                                </div>
                                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                                    <div className="d-inline-block mr-3">
                                        <img height={70} width={70} src={Eventlogo} alt="" className="organiger-logo" />
                                    </div>
                                    <div className="d-inline-block">
                                        <span className="organizer-by d-block">Organised by</span>
                                        <span className="organizer-name d-block">By KING</span>
                                    </div>
                                </div>
                                <div className="organizer-name-sec px-2 py-2">
                                    <div className="d-inline-flex align-items-center border-right event-time-area">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Timelogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Time</span>
                                            <span className="event-time d-block">07 : 00 PM</span>
                                        </div>
                                    </div>
                                    <div className="d-inline-flex align-items-center">
                                        <div className="d-inline-block mr-1">
                                            <img height={30} width={30} src={Hourglasslogo} alt="" />
                                        </div>
                                        <div className="d-inline-block">
                                            <span className="event-duration d-block">Event Duration</span>
                                            <span className="event-time d-block">2Hr 11Min</span>
                                        </div>
                                    </div>
                                    <div className="event-name">
                                        <span>Grand Night Party</span>
                                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout..</p>
                                    </div>
                                </div>
                                <div className="ticket-price-area mt-3">
                                    <Row>
                                        <Col md={7} xs={7} className="border-top-doted">
                                            <div className="location d-flex align-items-center text-center">
                                                <img height={30} width={30} src={LocationIcon} alt="" /> <span>Wilton , United States</span>
                                            </div>
                                        </Col>
                                        <Col md={5} xs={5}>
                                            <div className="price-section text-center">
                                                <p>Ticket Price</p>
                                                <span className="price">$99</span><span className="cut-price">$100</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="events-count-section mt-5 mb-5">
                <Container className="text-center">
                    <ul>
                        <li className="d-inline-block">
                            <div className="count-box">
                                <h3 className="count-box-title">Events</h3>
                                <h3 className="count-box-count"><span>9001+</span></h3>
                            </div>
                        </li>
                        <li className="d-inline-block">
                            <div className="count-box">
                                <h3 className="count-box-title">Events</h3>
                                <h3 className="count-box-count"><span>9001+</span></h3>
                            </div>
                        </li>
                        <li className="d-inline-block">
                            <div className="count-box">
                                <h3 className="count-box-title">Events</h3>
                                <h3 className="count-box-count"><span>9001+</span></h3>
                            </div>
                        </li>
                        <li className="d-inline-block">
                            <div className="count-box">
                                <h3 className="count-box-title">Events</h3>
                                <h3 className="count-box-count"><span>9001+</span></h3>
                            </div>
                        </li>
                        <li className="d-inline-block">
                            <div className="count-box">
                                <h3 className="count-box-title">Events</h3>
                                <h3 className="count-box-count"><span>9001+</span></h3>
                            </div>
                        </li>
                    </ul>
                </Container>
            </div>
            <div className="our_partner mt-5 mb-5">
                <Container>
                    <Row>
                        <Col md={12} className="mb-5 OurPartnerIcon-title-box">
                            <img className="OurPartnerIcon-title" src={OurPartnerIcon} alt="" />
                        </Col>
                        <Col md={12}>
                            <div className="partner-slider text-center">
                                <ul>
                                    <li className="d-inline-block mx-3">
                                        <img src={GoogleIcon} alt="" />
                                    </li>
                                    <li className="d-inline-block mx-3">
                                        <img src={GoogleIcon} alt="" />
                                    </li>
                                    <li className="d-inline-block mx-3">
                                        <img src={GoogleIcon} alt="" />
                                    </li>
                                    <li className="d-inline-block mx-3">
                                        <img src={GoogleIcon} alt="" />
                                    </li>
                                    <li className="d-inline-block mx-3">
                                        <img src={GoogleIcon} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Home;