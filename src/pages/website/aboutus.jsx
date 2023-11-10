import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whitestart from '../../common/icon/whitestart.svg';
import about2 from '../../common/image/about2.webp';
import about11 from '../../common/image/about11.webp';
import LogoIcon from '../../common/icon/logoicon.svg';
import { Link } from "react-router-dom";
const Page = ({ title }) => {
    return (
        <>
            <Container>
                <Row className="about_top_section">
                    <Col md={5}>
                        <img src={LogoIcon} className="web-icon-about" alt="" />
                        <img className="about11" src={about11} alt="" />

                    </Col>
                    <Col md={7}>
                        <p className="about_banner_shop_desc"><span className="bullet-point"></span> Meet Cut the Code</p>
                        <p className="about_banner_text">
                            A new generation of digital creators
                        </p>
                        <p className="about_banner_short_text">
                            The digital world? It changes fast. Keeping up with it takes time and knowledge that not all brands have. But that all of them need. We believe that being at the forefront starts with a different approach to digital creation.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="my-5">
                        <div className="As_a_leading_sec">
                            <h3 className="mb-5">
                                As a leading no-code agency, we’re here to help brands unlock the power of no-code through digital creation. Move faster, build smarter, scale more, code less.
                            </h3>
                            <Link className="button-join" to={'/'}>
                                <span>
                                    <span className="bg-style btn-a"><img height={30} width={30} src={whitestart} /></span>
                                    <span className="bg-style btn-b">Discover more</span>
                                    <span className="bg-style btn-c"><img height={30} width={30} src={whitestart} /></span>

                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col md={5}>
                        <img className="about2" src={about2} alt="" />
                    </Col>
                    <Col md={7}>
                        <div className="about2_box">
                            <h3>Cutting the complex to drive progress</h3>
                            <p>By simplifying the process of building for the web, we have more room for the strategic and creative stuff. Producing beautiful, scalable projects designed to bring our clients the most value. Our approach is to always strive for more of the new, and less of the same. Always open to change, and never closed off to new possibilities. That’s the mindset behind everything that we do.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="our_values_div">
                    <Col md={12}>
                        <h3 className="sec-main-title">Our values</h3>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <div className="our_values_box mx-2">
                            <p className="our_values_title">Move faster</p>
                            <p className="our_values_desc">Getting there before anyone else, in the most efficient way possible. Working smarter, not harder.</p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <div className="our_values_box mx-2">
                            <p className="our_values_title">Iterate to better</p>
                            <p className="our_values_desc">The drive to elevate everything that we do through a process of continuous improvement.</p>
                        </div>
                    </Col>
                    <Col md={4} xs={12} className="mb-3">
                        <div className="our_values_box mx-2">
                            <p className="our_values_title">Focus on flow</p>
                            <p className="our_values_desc">A state of mind and way of working that is fluid, transparent and fast to make the complex clear.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Page;