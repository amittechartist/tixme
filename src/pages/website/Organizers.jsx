import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Userimagefrom from "../../common/image/user.png";
import { app_url } from "../../common/Helpers";
import { Link } from "react-router-dom";
const Page = ({ title }) => {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={12}
            className="title-banner d-flex justify-content-center py-5"
          >
            <h3 className="title-banner-h3">{title}</h3>
          </Col>
          <Col md={12} className="mt-5 mb-4">
            <h3>Total organizer showing: 1</h3>
          </Col>
          <Col md={4}>
            <div className="organizer-box text-center">
              <img src={Userimagefrom} className="organizer-dp" alt="" />
              <p className="organizer-box-name">Siddharth Nayak</p>
              <p className="organizer-box-event-count">1 Event</p>
              <Link
                className="organizer-box-link"
                to={app_url + "organizer-profile"}
              >
                View Profile
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="organizer-box text-center">
              <img src={Userimagefrom} className="organizer-dp" alt="" />
              <p className="organizer-box-name">Siddharth Nayak</p>
              <p className="organizer-box-event-count">1 Event</p>
              <Link
                className="organizer-box-link"
                to={app_url + "organizer-profile"}
              >
                View Profile
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className="organizer-box text-center">
              <img src={Userimagefrom} className="organizer-dp" alt="" />
              <p className="organizer-box-name">Siddharth Nayak</p>
              <p className="organizer-box-event-count">1 Event</p>
              <Link
                className="organizer-box-link"
                to={app_url + "organizer-profile"}
              >
                View Profile
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Page;
