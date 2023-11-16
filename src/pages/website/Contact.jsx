import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationIcon from "../../common/icon/location.svg";
import MailIcon from "../../common/icon/mail.svg";
import BannerComponent from "../../component/BannerTop";
import whitestart from "../../common/icon/whitestart.svg";
import { Link } from "react-router-dom/dist";
const Page = ({ title }) => {
  return (
    <div className='content-data'>
      <Container>
        <Row>
          <BannerComponent title={title} />
          <Col md={12} className="p-5 mt-5 mb-5">
            <Row>
              <Col md={4}>
                <div className="d-flex align-items-center contact-left-boxes mb-4">
                  <div className="d-inline-block">
                    <img height={30} width={30} src={LocationIcon} alt="" />
                  </div>
                  <div className="d-inline-block">
                    <h4 className="contact-title">Our Address</h4>
                    <p className="contact-desc">
                      Office No 3N, Vijay Chambers Premises CHS LTD, Grant Road,
                      Tribhuvan Road, Mumbai, Maharashtra, India 400004
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center contact-left-boxes mb-4">
                  <div className="d-inline-block">
                    <img height={30} width={30} src={MailIcon} alt="" />
                  </div>
                  <div className="d-inline-block">
                    <h4 className="contact-title">Our Email</h4>
                    <p className="contact-desc">
                      tixme.sg@gmail.com tixme.india@gmail.com
                      tixme.usa@gmail.com
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center contact-left-boxes mb-4">
                  <div className="d-inline-block">
                    <img height={30} width={30} src={MailIcon} alt="" />
                  </div>
                  <div className="d-inline-block">
                    <h4 className="contact-title">Our Phone</h4>
                    <p className="contact-desc">+91 8080292007</p>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="contact-form-box">
                  <Row>
                    <Col md={12} className="">
                      <div className="right-box-title py-4">
                        <p className="pb-3 mx-3">Send A Message</p>
                      </div>
                    </Col>
                    <Col md={6} className="contact-1" >
                      <input
                        type="text"
                        className="theme-input-custome"
                        placeholder="Enter your first name"
                      />
                    </Col>
                    <Col md={6} className="contact-2" >
                      <input
                        type="text"
                        className="theme-input-custome "
                        placeholder="Enter your email"
                      />
                    </Col>
                    <Col md={12} className="contact-3">
                      <input
                        type="text"
                        className="theme-input-custome"
                        placeholder="Enter email subject"
                      />
                    </Col>
                    <Col md={12} className="contact-4 mb-4" >
                      <textarea
                        rows="5"
                        className="form-control theme-textarea-custome"
                        placeholder="Enter your message"
                      ></textarea>
                    </Col>
                    <Col md={12} className="mb-4 contact-5" >
                      <Link className="button-join" to={"/"}>
                        <span>
                          <span className="bg-style btn-a">
                            <img height={30} width={30} src={whitestart} />
                          </span>
                          <span className="bg-style btn-b">Send Message</span>
                          <span className="bg-style btn-c">
                            <img height={30} width={30} src={whitestart} />
                          </span>
                        </span>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Page;
