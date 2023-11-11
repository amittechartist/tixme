import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Eventlogo from "../../common/icon/eventlogo.svg";
import Timelogo from "../../common/icon/time 1.svg";
import Hourglasslogo from "../../common/icon/hourglass.svg";
import LocationIcon from "../../common/icon/location.svg";
import Eventimg from "../../common/event.jpg";
import DateIcon from "../../common/icon/date 2.svg";
import MapIcon from "../../common/icon/mapicon.svg";
import HeartIcon from "../../common/icon/heart.svg";
import ShareIcon from "../../common/icon/share.svg";
import EventImg from "../../common/event1.png";
import MailIcon from "../../common/icon/mail.svg";
import whitestart from "../../common/icon/whitestart.svg";
import FlagIcon from "../../common/icon/flag.svg";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import CountUp from "react-countup";
const Page = ({ title }) => {
  return (
    <>
      <div className="event-page-header mt-5 mb-5">
        <Container>
          <div className="mt-5">
            <Flip>
              <span className="event-category-title">NIGHTLIFE</span>
            </Flip>
            <p className="event-title mt-5">
              {" "}
              <Flip left cascade>
                Grand Night Party
              </Flip>
            </p>
          </div>
          <div>
            <div className="organizer-name-sec px-2 py-2">
              <div className="d-inline-flex align-items-center border-right event-time-area py-2">
                <div className="d-inline-block mr-1">
                  <img height={30} width={30} src={DateIcon} alt="" />
                </div>
                <div className="d-inline-block">
                  <span className="event-duration d-block">26 Jan 2023</span>
                </div>
              </div>
              <div className="d-inline-flex align-items-center border-right event-time-area px-2">
                <div className="d-inline-block mr-1">
                  <img height={30} width={30} src={Timelogo} alt="" />
                </div>
                <div className="d-inline-block">
                  <span className="event-duration d-block">Event Time</span>
                  <span className="event-time d-block">07 : 00 PM</span>
                </div>
              </div>
              <div className="d-inline-flex align-items-center border-right event-time-area">
                <div className="d-inline-block mr-1">
                  <img height={30} width={30} src={Hourglasslogo} alt="" />
                </div>
                <div className="d-inline-block">
                  <span className="event-duration d-block">Event Duration</span>
                  <span className="event-time d-block">2Hr 11Min</span>
                </div>
              </div>
              <div className="d-inline-flex align-items-center">
                <div className="d-inline-block mr-1">
                  <img height={30} width={30} src={LocationIcon} alt="" />
                </div>
                <div className="d-inline-block">
                  <span className="event-duration d-block">
                    Wilton , United States
                  </span>
                  <span className="event-time d-block">Get direction</span>
                </div>
                <div className="d-inline-block mr-1 ml-3">
                  <img height={30} width={30} src={MapIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Row className="mt-5">
            <Col md={12}>
              <span className="float-right">
                <img className="mx-1" src={HeartIcon} alt="" />
                <img className="mx-1" src={ShareIcon} alt="" />
              </span>
            </Col>
            <Col md={12}>
              <img className="mt-2 event-banner" src={EventImg} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="event-desc">
        <Container>
          <Row>
            <Col md={8}>
              <div className="desc-sec">
                <span className="sec-title">
                  <Fade bottom>Description</Fade>
                </span>
                <Fade bottom>
                  <p>
                    Lorem ipsum is a pseudo-Latin text used in web design,
                    typography, layout, and printing in place of English to
                    emphasise design elements over content. It's also called
                    placeholder (or filler) text. It's a convenient tool for
                    mock-ups. It helps to outline the visual elements of a
                    document or presentation, eg typography, font, or layout.
                    Lorem ipsum is mostly a part of a Latin text by the
                    classical author and philosopher Cicero. Its words and
                    letters have been changed by addition or removal, so to
                    deliberately render its content nonsensical; it's not
                    genuine, correct, or comprehensible Latin anymore. While
                    lorem ipsum's still resembles classical Latin, it actually
                    has no meaning whatsoever. As Cicero's text doesn't contain
                    the letters K, W, or Z, alien to latin, these, and others
                    are often inserted randomly to mimic the typographic
                    appearence of European languages, as are digraphs not to be
                    found in the original.
                  </p>
                </Fade>
              </div>
              <div className="desc-sec">
                <span className="sec-title">Map</span>
              </div>
              <div className="desc-sec">
                <span className="sec-title">
                  Return Policy{" "}
                  <span>
                    <img src={ShareIcon} alt="" />
                  </span>
                </span>
                <p className="report">
                  <img src={FlagIcon} alt="" /> Report this event
                </p>
              </div>
              <Row>
                <Col md={12}>
                  <Slide bottom>
                    <div className="start-in-box eventpage-box-style mb-5">
                      <Row>
                        <Col md={6}>
                          <div className="right-box-title">
                            <p>Tags</p>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="tags pt-4 pb-5">
                            <ul>
                              <li className="d-inline-block m-1 mb-3">
                                <span className="event-category-title event-category-title-mobile font-13">
                                  Online Events
                                </span>
                              </li>
                              <li className="d-inline-block m-1 mb-3">
                                <span className="event-category-title event-category-title-mobile font-13">
                                  Things To Do Online
                                </span>
                              </li>
                              <li className="d-inline-block m-1 mb-3">
                                <span className="event-category-title event-category-title-mobile font-13">
                                  Online Networking
                                </span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Slide>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <div className="start-in-box eventpage-box-style mb-5">
                    <Row>
                      <Col md={8}>
                        <div className="right-box-title">
                          <p>More events from this organiser</p>
                        </div>
                      </Col>
                      <Col md={12}>
                        <Row>
                          <Col md={6}>
                            <Slide bottom>
                              <div className="more-event-box">
                                <div className="ticket-price-area ticket-price-area-bg mt-3">
                                  <Row>
                                    <Col
                                      md={5}
                                      className="d-flex align-items-center"
                                    >
                                      <div className="event-image-part">
                                        <img
                                          className="event-image"
                                          src={Eventimg}
                                          alt=""
                                        />
                                      </div>
                                    </Col>
                                    <Col md={7} className="event-view-page">
                                      <div className="organizer-name-sec px-2 py-2">
                                        <div className="d-inline-flex align-items-center  event-time-area">
                                          <div className="d-inline-block mr-1">
                                            <img
                                              height={30}
                                              width={30}
                                              src={Timelogo}
                                              alt=""
                                            />
                                          </div>
                                          <div className="d-inline-block">
                                            <span className="event-duration d-block">
                                              Event Time
                                            </span>
                                            <span className="event-time d-block">
                                              07 : 00 PM
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-inline-flex align-items-center">
                                          <div className="d-inline-block mr-1">
                                            <img
                                              height={30}
                                              width={30}
                                              src={Hourglasslogo}
                                              alt=""
                                            />
                                          </div>
                                          <div className="d-inline-block">
                                            <span className="event-duration d-block">
                                              Event Duration
                                            </span>
                                            <span className="event-time d-block">
                                              2Hr 11Min
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col md={12}>
                                      <div className="event-name  ml-2">
                                        <span>Grand Night Party</span>
                                        <p className="font-10">
                                          Lorem ipsum is a pseudo-Latin text
                                          used in web design, typography,
                                          layout..
                                        </p>
                                      </div>
                                    </Col>
                                    <Col
                                      md={7}
                                      xs={7}
                                      className="border-top-doted"
                                    >
                                      <div className="location d-flex align-items-center text-center">
                                        <img
                                          height={30}
                                          width={30}
                                          src={LocationIcon}
                                          alt=""
                                        />{" "}
                                        <span>Wilton , United States</span>
                                      </div>
                                    </Col>
                                    <Col md={5} xs={5}>
                                      <div className="price-section text-center">
                                        <p>Ticket Price</p>
                                        <span className="price">$99</span>
                                        <span className="cut-price">$100</span>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Slide>
                          </Col>
                          <Col md={6}>
                            <Slide bottom>
                              <div className="more-event-box">
                                <div className="ticket-price-area ticket-price-area-bg mt-3">
                                  <Row>
                                    <Col
                                      md={5}
                                      className="d-flex align-items-center"
                                    >
                                      <div className="event-image-part">
                                        <img
                                          className="event-image"
                                          src={Eventimg}
                                          alt=""
                                        />
                                      </div>
                                    </Col>
                                    <Col md={7} className="event-view-page">
                                      <div className="organizer-name-sec px-2 py-2">
                                        <div className="d-inline-flex align-items-center event-time-area">
                                          <div className="d-inline-block mr-1">
                                            <img
                                              height={30}
                                              width={30}
                                              src={Timelogo}
                                              alt=""
                                            />
                                          </div>
                                          <div className="d-inline-block">
                                            <span className="event-duration d-block">
                                              Event Time
                                            </span>
                                            <span className="event-time d-block">
                                              07 : 00 PM
                                            </span>
                                          </div>
                                        </div>
                                        <div className="d-inline-flex align-items-center">
                                          <div className="d-inline-block mr-1">
                                            <img
                                              height={30}
                                              width={30}
                                              src={Hourglasslogo}
                                              alt=""
                                            />
                                          </div>
                                          <div className="d-inline-block">
                                            <span className="event-duration d-block">
                                              Event Duration
                                            </span>
                                            <span className="event-time d-block">
                                              2Hr 11Min
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                    <Col md={12}>
                                      <div className="event-name ml-2">
                                        <span>Grand Night Party</span>
                                        <p className="font-10">
                                          Lorem ipsum is a pseudo-Latin text
                                          used in web design, typography,
                                          layout..
                                        </p>
                                      </div>
                                    </Col>
                                    <Col
                                      md={7}
                                      xs={7}
                                      className="border-top-doted"
                                    >
                                      <div className="location d-flex align-items-center text-center">
                                        <img
                                          height={30}
                                          width={30}
                                          src={LocationIcon}
                                          alt=""
                                        />{" "}
                                        <span>Wilton , United States</span>
                                      </div>
                                    </Col>
                                    <Col md={5} xs={5}>
                                      <div className="price-section text-center">
                                        <p>Ticket Price</p>
                                        <span className="price">$99</span>
                                        <span className="cut-price">$100</span>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Slide>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <div className="start-in-box eventpage-box-style mb-5">
                <div className="right-box-title">
                  <p><Flip left cascade>Starts In</Flip></p>
                </div>
                <div className="right-box-con mt-4">
                  <div className="time-box d-inline-block text-center">
                    <p className="time-box-date"><CountUp separator="" start={1} end={10} /></p>
                    <p className="time-box-text">Days</p>
                  </div>
                  <div className="time-box d-inline-block text-center">
                    <p className="time-box-date"><CountUp separator="" start={1} end={5} /></p>
                    <p className="time-box-text">Hours</p>
                  </div>
                  <div className="time-box d-inline-block text-center">
                    <p className="time-box-date"><CountUp separator="" start={1} end={33} /></p>
                    <p className="time-box-text">Minutes</p>
                  </div>
                  <div className="time-box d-inline-block text-center">
                    <p className="time-box-date"><CountUp separator="" start={1} end={16} /></p>
                    <p className="time-box-text">Seconds</p>
                  </div>
                </div>
              </div>
              <div className="organised-by-box eventpage-box-style">
                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                  <div className="d-inline-block mr-3">
                    <img
                      height={70}
                      width={70}
                      src={Eventlogo}
                      alt=""
                      className="organiger-logo"
                    />
                  </div>
                  <div className="d-inline-block">
                    <span className="organizer-by d-block">Organised by</span>
                    <span className="organizer-name d-block">By KING</span>
                  </div>
                </div>
                <div className="border-botton-devider my-2"></div>
                <div className="right-box-con mt-4">
                  <div className="d-flex align-items-center">
                    <div className="d-inline-block mr-4">
                      <p className="followers-title">Followers</p>
                      <p className="followers-count">99</p>
                    </div>
                    <div className="d-inline-block">
                      <button type="button" className="follow-btn">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="d-inline-flex align-items-center py-2">
                    <div className="d-inline-block mr-1">
                      <img height={30} width={30} src={LocationIcon} alt="" />
                    </div>
                    <div className="d-inline-block">
                      <span className="event-page-organizer-deta d-block">
                        454 Isaac Frye Hwy, Wilton, United States
                      </span>
                    </div>
                  </div>
                  <div className="d-inline-flex align-items-center py-2">
                    <div className="d-inline-block mr-1">
                      <img height={30} width={30} src={MailIcon} alt="" />
                    </div>
                    <div className="d-inline-block">
                      <span className="event-page-organizer-deta d-block">
                        kin@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="start-in-box eventpage-box-style mb-5 my-5">
                <div className="right-box-title">
                  <p><Flip left cascade>Tickets</Flip></p>
                </div>
                <div className="right-box-con mt-4">
                  <div className="d-flex align-items-center">
                    <div className="price-section d-inline-block">
                      <p className="Ticket-title">Ticket</p>
                      <span className="price">$99</span>
                      <span className="cut-price">$100</span>
                    </div>
                    <div className="d-inline-block cart-increment-button">
                      <span>
                        <span className="cart-minus cart-btn">-</span>
                        <span className="cart-number">01</span>
                        <span className="cart-plus cart-btn">+</span>
                      </span>
                    </div>
                  </div>
                  <div className="organizer-name-sec px-2 py-2 margin-css">
                    <div className="event-name">
                      <p className="mb-0">Discount available :</p>
                    </div>
                    <div className="d-inline-flex align-items-center border-right event-time-area">
                      <div className="d-inline-block mr-1">
                        <img height={20} width={20} src={Timelogo} alt="" />
                      </div>
                      <div className="d-inline-block">
                        <span className="event-duration d-block font-13">
                          Event Time
                        </span>
                        <span className="event-time d-block">07 : 00 PM</span>
                      </div>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <div className="d-inline-block mr-1">
                        <img
                          height={20}
                          width={20}
                          src={Hourglasslogo}
                          alt=""
                        />
                      </div>
                      <div className="d-inline-block">
                        <span className="event-duration d-block font-13">
                          Event Duration
                        </span>
                        <span className="event-time d-block">2Hr 11Min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashed-border-devider my-2"></div>
                <div className="right-box-con mt-4">
                  <div className="d-flex align-items-center">
                    <div className="price-section d-inline-block">
                      <p className="Ticket-title">Ticket</p>
                      <span className="price">$99</span>
                      <span className="cut-price">$100</span>
                    </div>
                    <div className="d-inline-block cart-increment-button">
                      <span>
                        <span className="cart-minus cart-btn">-</span>
                        <span className="cart-number">01</span>
                        <span className="cart-plus cart-btn">+</span>
                      </span>
                    </div>
                  </div>
                  <div className="organizer-name-sec px-2 py-2 margin-css">
                    <div className="event-name">
                      <p className="mb-0">Discount available :</p>
                    </div>
                    <div className="d-inline-flex align-items-center border-right event-time-area">
                      <div className="d-inline-block mr-1">
                        <img height={20} width={20} src={Timelogo} alt="" />
                      </div>
                      <div className="d-inline-block">
                        <span className="event-duration d-block font-13">
                          Event Time
                        </span>
                        <span className="event-time d-block">07 : 00 PM</span>
                      </div>
                    </div>
                    <div className="d-inline-flex align-items-center">
                      <div className="d-inline-block mr-1">
                        <img
                          height={20}
                          width={20}
                          src={Hourglasslogo}
                          alt=""
                        />
                      </div>
                      <div className="d-inline-block">
                        <span className="event-duration d-block font-13">
                          Event Duration
                        </span>
                        <span className="event-time d-block">2Hr 11Min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashed-border-devider my-2"></div>
                <div>
                  <span className="main-title">Total Price :</span>{" "}
                  <span className="float-right main-title">$ 95.00</span>
                </div>
                <div className="mt-5">
                  <Link className="button-join" to={"/"}>
                    <span>
                      <span className="bg-style">
                        <img height={30} width={30} src={whitestart} />
                      </span>
                      <span className="bg-style">Pay Now</span>
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="event-category-section mb-5">
        <Container className="">
          <Row className="event-box-mobile">
            <Col md={4} className="mb-3">
            <Flip left>
              <div className="event-box-style">
                <div className="event-image-part">
                  <img className="event-image" src={Eventimg} alt="" />
                  <span className="event-category-img">Party</span>
                  <span className="on-img-date">
                    <img src={DateIcon} alt="" />
                    <span className="on-img-date-val">26 Jan</span>
                  </span>
                </div>
                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                  <div className="d-inline-block mr-3">
                    <img
                      height={70}
                      width={70}
                      src={Eventlogo}
                      alt=""
                      className="organiger-logo"
                    />
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
                      <span className="event-duration d-block">
                        Event Duration
                      </span>
                      <span className="event-time d-block">2Hr 11Min</span>
                    </div>
                  </div>
                  <div className="event-name">
                    <span>Grand Night Party</span>
                    <p>
                      Lorem ipsum is a pseudo-Latin text used in web design,
                      typography, layout..
                    </p>
                  </div>
                </div>
                <div className="ticket-price-area mt-3">
                  <Row>
                    <Col md={7} xs={7} className="border-top-doted">
                      <div className="location d-flex align-items-center text-center">
                        <img height={30} width={30} src={LocationIcon} alt="" />{" "}
                        <span>Wilton , United States</span>
                      </div>
                    </Col>
                    <Col md={5} xs={5}>
                      <div className="price-section text-center">
                        <p>Ticket Price</p>
                        <span className="price">$99</span>
                        <span className="cut-price">$100</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              </Flip>
            </Col>
            <Col md={4} className="mb-3">
            <Flip left>
              <div className="event-box-style">
                <div className="event-image-part">
                  <img className="event-image" src={Eventimg} alt="" />
                  <span className="event-category-img">Party</span>
                  <span className="on-img-date">
                    <img src={DateIcon} alt="" />
                    <span className="on-img-date-val">26 Jan</span>
                  </span>
                </div>
                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                  <div className="d-inline-block mr-3">
                    <img
                      height={70}
                      width={70}
                      src={Eventlogo}
                      alt=""
                      className="organiger-logo"
                    />
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
                      <span className="event-duration d-block">
                        Event Duration
                      </span>
                      <span className="event-time d-block">2Hr 11Min</span>
                    </div>
                  </div>
                  <div className="event-name">
                    <span>Grand Night Party</span>
                    <p>
                      Lorem ipsum is a pseudo-Latin text used in web design,
                      typography, layout..
                    </p>
                  </div>
                </div>
                <div className="ticket-price-area mt-3">
                  <Row>
                    <Col md={7} xs={7} className="border-top-doted">
                      <div className="location d-flex align-items-center text-center">
                        <img height={30} width={30} src={LocationIcon} alt="" />{" "}
                        <span>Wilton , United States</span>
                      </div>
                    </Col>
                    <Col md={5} xs={5}>
                      <div className="price-section text-center">
                        <p>Ticket Price</p>
                        <span className="price">$99</span>
                        <span className="cut-price">$100</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              </Flip>
            </Col>
            <Col md={4} className="mb-3">
                <Flip left>
              <div className="event-box-style">
                <div className="event-image-part">
                  <img className="event-image" src={Eventimg} alt="" />
                  <span className="event-category-img">Party</span>
                  <span className="on-img-date">
                    <img src={DateIcon} alt="" />
                    <span className="on-img-date-val">26 Jan</span>
                  </span>
                </div>
                <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                  <div className="d-inline-block mr-3">
                    <img
                      height={70}
                      width={70}
                      src={Eventlogo}
                      alt=""
                      className="organiger-logo"
                    />
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
                      <span className="event-duration d-block">
                        Event Duration
                      </span>
                      <span className="event-time d-block">2Hr 11Min</span>
                    </div>
                  </div>
                  <div className="event-name">
                    <span>Grand Night Party</span>
                    <p>
                      Lorem ipsum is a pseudo-Latin text used in web design,
                      typography, layout..
                    </p>
                  </div>
                </div>
                <div className="ticket-price-area mt-3">
                  <Row>
                    <Col md={7} xs={7} className="border-top-doted">
                      <div className="location d-flex align-items-center text-center">
                        <img height={30} width={30} src={LocationIcon} alt="" />{" "}
                        <span>Wilton , United States</span>
                      </div>
                    </Col>
                    <Col md={5} xs={5}>
                      <div className="price-section text-center">
                        <p>Ticket Price</p>
                        <span className="price">$99</span>
                        <span className="cut-price">$100</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              </Flip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Page;
