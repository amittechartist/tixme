import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Page = ({ title }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className="title-banner d-flex justify-content-center py-5">
                        <h3 className="title-banner-h3">{title}</h3>
                    </Col>
                    <Col md={12} className="p-5 mt-5 mb-5">
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Page;