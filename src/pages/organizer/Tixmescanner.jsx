import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import QrcodeLotte from '../../lotte/qr-code-scaner-gif.json'
import Lottie from "lottie-react";
import Whitebtn from '../../component/Whitestarbtn';
import { admin_url, app_url, apiurl, customer_url } from '../../common/Helpers';
import { useNavigate } from 'react-router-dom';
const Dashboard = ({ title }) => {
    const [openQrcode, setopenQrcode] = useState(false);
    const [scanLocation, setScanLocation] = useState('');
    const intervalRef = useRef(null); // Ref to hold the interval
    const navigate = useNavigate();
    useEffect(() => {
        reloadOneTime();
        intervalRef.current = setInterval(checkForResult, 1000); // Run checkForResult every second

        return () => clearInterval(intervalRef.current); // Clean up interval on component unmount
    }, []);
    const openscanner = () => {
        setopenQrcode(true)
    }
    const reloadOneTime = () => {
        if (!window.location.hash) {
            window.location = window.location + '##';
            window.location.reload();
        }
    };

    const checkForResult = () => {
        const resultElement = document.getElementById('camera-result');
        if (resultElement && resultElement.textContent.trim() !== '') {
            let maintext = resultElement.textContent.trim();
            localStorage.setItem('scanlocation', maintext)
            // navigate(app_url + 'homepage');
            setScanLocation(maintext);
            console.warn("test",maintext);
            clearInterval(intervalRef.current); // Stop the interval
        }
    };
    const lottewidth = {
        width: 'auto',
        height: '400px'
    }
    return (
        <>
            <div className="content-body" style={{ background: '#F1F1F1' }}>
                <div className="container-fluid">
                    <div className="page-titles">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{title}</li>
                        </ol>
                    </div>

                    {openQrcode ? (
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <div>{scanLocation}</div>
                                <Card>
                                    <Card.Body className="text-center">
                                        <section>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-md-10 offset-md-1">
                                                        <h3 className="text-start text-md-center"></h3>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="camera-off">
                                                            <p id="message-denied">
                                                                Please allow camera access to scan QR codes.
                                                            </p>
                                                            <p id="message-off" style={{ display: 'none' }}>
                                                                Could not find a usable camera on this device to scan QR codes.
                                                                Prefer using this site on your mobile phone.
                                                            </p>
                                                        </div>
                                                        <div className="camera-on" style={{ display: 'none' }}>
                                                            <div id="camera-preview"></div>
                                                        </div>
                                                        <div className="camera-result">
                                                            <h2>Scan Result</h2>
                                                            <p className="text-center" id="camera-result"></p>
                                                            <div className="btn-toolbar">
                                                                <button className="btn btn-primary mx-auto" id="redo-scan">New scan</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Card>

                                    <Card.Body className="text-center">
                                        <div>
                                            <h2 className="">{title}</h2>
                                            <Lottie className="py-2" animationData={QrcodeLotte} style={lottewidth} />
                                            <span className="ml-5" onClick={() => openscanner()}>
                                                <Whitebtn title={'Scan Item'} />
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )}
                </div>
            </div>

        </>
    )
}
export default Dashboard;