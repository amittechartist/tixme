import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationIcon from "../../common/icon/location.svg";
import MailIcon from "../../common/icon/mail.svg";
import BannerComponent from '../../component/BannerTop';
const Page = ({ title }) => {
  return (
    <>
      <Container>
        <Row>
        <BannerComponent title={title}/>
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
                    <Col md={12}>
                      <div className="right-box-title">
                        <p>More events from this organiser</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <input
                        type="text"
                        className="theme-input"
                        placeholder="Enter your first name"
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        type="text"
                        className="theme-input"
                        placeholder="Enter your email"
                      />
                    </Col>
                    <Col md={12}>
                      <input
                        type="text"
                        className="theme-input"
                        placeholder="Enter email subject"
                      />
                    </Col>
                    <Col md={12}>
                      <textarea
                        rows={5}
                        className="theme-input"
                        placeholder="Enter your message"
                      ></textarea>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Page;
