import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GoogleIcon from "../../common/icon/googleicon.svg";
import AirbnbLogo from "../../common/icon/image 7.png";
import BookingLogo from "../../common/icon/image 8.png";
import ExpediaIcon from "../../common/icon/image 9.png";
import TuiIconIcon from "../../common/icon/image 10.png";

import OurPartnerIcon from "../../common/icon/Our Partner.svg";
import MusicIcon from "../../common/icon/Music.svg";
import TicketIcon from "../../common/icon/Ticket vector.svg";
import FindnearByEvents from "../../common/icon/findnear By Events.svg";
import Eventlogo from "../../common/icon/eventlogo.svg";
import Timelogo from "../../common/icon/time 1.svg";
import Hourglasslogo from "../../common/icon/hourglass.svg";
import LocationIcon from "../../common/icon/location.svg";
import Eventimg from "../../common/event.jpg";
import DateIcon from "../../common/icon/date 2.svg";
import EllipseIcon from "../../common/icon/Ellipse 5.svg";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Slider from "react-slick";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';
import { apiurl } from "../../common/Helpers";
const Home = ({ title }) => {
  const [Eventlist, setEventlist] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const fetchEvent = async () => {
    try {
      fetch(apiurl + "website/ticket-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success == true) {
            setEventlist(data.data);
          } else {
          }
        })
        .catch((error) => {
          console.error("Insert error:", error);
        });
    } catch (error) {
      console.error("Login api error:", error);
    }
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <>
      <Container fluid className="body-container">
        <div className="home_banner">
          <Row>
            <Col>
              <p className="banner_shop_desc">
                <span className="bullet-point"></span>
                <Flip top>
                  Safe, secure, reliable ticketing. Your ticket to live
                  entertainment !
                </Flip>
              </p>
              <p className="banner_text">
                <Flip top cascade>
                  Get Ready for
                </Flip>
                <Bounce right cascade>
                  <span className="text-blue ml-3">Unforgettable</span>
                </Bounce>
                <br />
                <Flip top cascade>
                  Experiences : Your Ticket to
                  <br />
                  Exceptional Events !
                </Flip>
              </p>
            </Col>
          </Row>
        </div>
        <div className="mt-5 mb-5">
          <div>
            <div className="find-nearby-section">
              <Row>
                <Col md={12}>
                  <h3 className="find-near-box">Find Near By Events</h3>
                </Col>
                <Col md={12} className="Find-Near-form">
                  <select name="" id="" className="theme-dropdown dropdown-custome">
                    <option value="">Category</option>
                  </select>
                  <select name="" id="" className="theme-dropdown">
                    <option value="">Location</option>
                  </select>
                  <input
                    type="text"
                    className="theme-input"
                    placeholder="Search anything"
                  />
                </Col>
                <Col md={12} className="category-box-responsive">
                  <div className="category-section text-center">
                    <Slider {...settings}>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Music</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">NIGHTLIFE</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Business & Networking</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Sports & Fitness</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Food & Drinks</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Arts & Theater</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Arts & Theater</p>
                        </div>
                      </div>
                      <div className=" mx-2">
                        <div className="category-items-box">
                          <img
                            className="ticket-category-bg"
                            src={MusicIcon}
                            alt=""
                          />
                          <img className="ticket-bg" src={TicketIcon} alt="" />
                          <p className="category-title">Music</p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="event-category-section">
          <div className="event-list-bg">
            <span className="event-title-home">
              <img src={EllipseIcon} alt="" /> Events
            </span>
            <Row className="event-box-mobile">
              {/* {Eventlist.map((item, index) => ( */}
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
              <Col md={4} className="mb-5">
                <Fade bottom>
                  <div className="event-box-style">
                    <div className="event-image-part">
                      <img className="event-image" src={Eventimg} alt="" />
                      <span className="event-category-img">Party</span>
                      <span className="on-img-date">
                        <img src={DateIcon} alt="" />
                        <span className="on-img-date-val">12 Nov</span>
                      </span>
                    </div>
                    <div className="organizer-name-sec d-flex align-items-center px-2 py-2">
                      <div className="d-inline-block mr-3">
                        <img
                          height={50}
                          width={50}
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
                          <span className="event-duration d-block">
                            Event Time
                          </span>
                          <span className="event-time d-block">12:23 AM</span>
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
                          <span className="event-time d-block">2Hr 11Min</span>
                        </div>
                      </div>
                      <div className="event-name">
                        <span>Lorem ipsum</span>
                        <p>
                          Lorem ipsum is a pseudo-Latin text used in web design,
                          typography, layout..
                        </p>
                      </div>
                    </div>
                    <div className="ticket-price-area mt-3">
                      <Row>
                        <Col md={7} xs={7} className="border-top-doted">
                          <div className="d-flex align-items-center text-center location-name">
                            <img
                              height={30}
                              width={30}
                              src={LocationIcon}
                              alt=""
                            />{" "}
                            <span>USA</span>
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
                </Fade>
              </Col>
            </Row>
          </div>
        </div>
        <div className="events-count-section mt-5 mb-5">
          <div className="text-center">
            <ul>
              <li className="d-inline-block">
                <Fade bottom cascade>
                  <div className="count-box">
                    <h3 className="count-box-title">Events</h3>
                    <h3 className="count-box-count">
                      <span>
                        <CountUp separator="" start={4000} end={9001} />+
                      </span>
                    </h3>
                  </div>
                </Fade>
              </li>
              <li className="d-inline-block">
                <Fade bottom cascade>
                  <div className="count-box">
                    <h3 className="count-box-title">Events</h3>
                    <h3 className="count-box-count">
                      <span>
                        <CountUp separator="" start={4000} end={6067} />+
                      </span>
                    </h3>
                  </div>
                </Fade>
              </li>
              <li className="d-inline-block">
                <Fade bottom cascade>
                  <div className="count-box">
                    <h3 className="count-box-title">Events</h3>
                    <h3 className="count-box-count">
                      <span>
                        <CountUp separator="" start={4000} end={8544} />+
                      </span>
                    </h3>
                  </div>
                </Fade>
              </li>
              <li className="d-inline-block">
                <Fade bottom cascade>
                  <div className="count-box">
                    <h3 className="count-box-title">Events</h3>
                    <h3 className="count-box-count">
                      <span>
                        <CountUp separator="" start={4000} end={9800} />+
                      </span>
                    </h3>
                  </div>
                </Fade>
              </li>
              <li className="d-inline-block">
                <Fade bottom cascade>
                  <div className="count-box">
                    <h3 className="count-box-title">Events</h3>
                    <h3 className="count-box-count">
                      <span>
                        <CountUp separator="" start={4000} end={9088} />+
                      </span>
                    </h3>
                  </div>
                </Fade>
              </li>
            </ul>
          </div>
        </div>
        <div className="our_partner mt-5 mb-5">
          <Row>
            <Col md={12} className="mb-5 OurPartnerIcon-title-box">
              <img
                className="OurPartnerIcon-title"
                src={OurPartnerIcon}
                alt=""
              />
            </Col>
            <Col md={12}>
              <div className="partner-slider text-center">
                <ul>
                  <li className="d-inline-block mx-3">
                    <Zoom><img src={GoogleIcon} alt="" /></Zoom>
                  </li>
                  <li className="d-inline-block mx-3">
                    <Zoom><img src={AirbnbLogo} alt="" /></Zoom>
                  </li>
                  <li className="d-inline-block mx-3">
                    <Zoom><img src={BookingLogo} alt="" /></Zoom>
                  </li>
                  <li className="d-inline-block mx-3">
                    <Zoom><img src={ExpediaIcon} alt="" /></Zoom>
                  </li>
                  <li className="d-inline-block mx-3">
                    <Zoom><img src={TuiIconIcon} alt="" /></Zoom>
                  </li>
                </ul>
              </div>
            </Col>

          </Row>

        </div>
      </Container>
    </>
  );
};
export default Home;
