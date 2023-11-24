import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { apiurl, admin_url, isEmail, app_url } from '../../common/Helpers';
import QR from '../../common/image/qr.png'
import WhiteButton from '../../component/Whitestarbtn';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";
import withReactContent from 'sweetalert2-react-content'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import QRCode from 'react-qr-code';
import { useNavigate } from "react-router-dom";
const Dashboard = ({ title }) => {
    const navigate = useNavigate();
    const Beartoken = localStorage.getItem('userauth');
    const [Loader, setLoader] = useState(false);
    const [Listitems, setListitems] = useState([]);
    const [Ticketlist, setTicketlist] = useState([]);
    const [apiLoader, setapiLoader] = useState(false);
    const [modal, setModal] = useState(false);
    const fetchList = async () => {
        try {
            if (!Beartoken) {
                toast.error("Login to your account");
                navigate(app_url + 'auth/customer/signup');
                return;
            }
            fetch(apiurl + 'order/customer/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Beartoken}`,
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        setListitems(data.data);
                        setLoader(false)
                    } else {

                    }
                })
                .catch(error => {
                    console.error('Insert error:', error);
                });
        } catch (error) {
            console.error('Login api error:', error);
        }

    }
    const Handelviewmodal = async (id) => {
        try {
            const requestData = {
                id: id,
            };
            setModal(true)
            setapiLoader(true)
            fetch(apiurl + 'order/ticket-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header to JSON
                },
                body: JSON.stringify(requestData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        setTicketlist(data.data);
                        setapiLoader(false)
                    } else {
                        setModal(false)
                        setapiLoader(false)
                    }
                })
                .catch(error => {
                    console.error('Insert error:', error);
                    setModal(false)
                    setapiLoader(false)
                });
        } catch (error) {
            console.error('Login api error:', error);
            setModal(false)
        }
    }
    const generateRandomNumber = () => {
        return Math.floor(10000 + Math.random() * 90000); // Generates a random 5-digit number
    };
    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <Modal className="ticket-view-page" isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={!modal}>View tickets</ModalHeader>
                <ModalBody>
                    {apiLoader ? (
                        <div className="linear-background w-100"> </div>
                    ) : (
                        <>
                            <Row className="ticket-list-row">
                                {Ticketlist.map((item, index) => (
                                    <Col md={12} className="mb-4">
                                        {/* <QRCode style={{ height: "200px", width: "200px" }} value={JSON.stringify(item)} /> */}
                                        {/* <img src={QR} style={{ height: "auto", width: "100px" }} alt="" /> */}
                                        <div className="ticket-box">
                                            <div className="ticket-qr text-center">
                                                <QRCode style={{ height: "auto", width: "150px" }} value={JSON.stringify({ id: item._id, time: generateRandomNumber(), index:index })} />
                                            </div>
                                            <div className="ticket-data">
                                                <p className="ticket-view-title">Event Name</p>
                                                <p className="ticket-view-data">{item.eventdata.display_name}</p>
                                                <p className="ticket-view-title">Place</p>
                                                <p className="ticket-view-data">{item.eventdata.location}</p>
                                                <p className="ticket-view-title">event data</p>
                                                <p className="ticket-view-data">{item.eventdata.start_date} {item.eventdata.start_time}</p>
                                                <p className="ticket-view-title">Created by</p>
                                                <p className="ticket-view-data">{item.owner_email}</p>
                                                <div>
                                                    <button className="btn btn-success w-100">Transfer</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => setModal(!modal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <div className="content-body" style={{ background: '#F1F1F1' }}>
                <div className="container-fluid">
                    <div className="page-titles">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{title}</li>
                        </ol>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <Card className="py-4">
                                <Card.Body>
                                    <Row className="justify-content-center">
                                        <Col md={12}>
                                            <div class="table-responsive">
                                                {Loader ? (
                                                    <div className="linear-background w-100"> </div>
                                                ) : (
                                                    <table class="table table-responsive-md">
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '80px' }}><strong>#</strong></th>
                                                                <th><strong>Date</strong></th>
                                                                <th><strong>Amount</strong></th>
                                                                <th><strong>Transaction Id</strong></th>
                                                                <th><strong>Payment Status</strong></th>
                                                                <th><strong>View Tickets</strong></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Listitems.map((item, index) => (
                                                                <tr>
                                                                    <td>
                                                                        <strong>{index + 1}</strong>
                                                                    </td>
                                                                    <td>{item.date} {item.time}</td>
                                                                    <td>{item.amount}</td>
                                                                    <td>{item.tnsid}</td>
                                                                    <td><span class="badge light badge-success">Success</span></td>
                                                                    <td>
                                                                        <div class="dropdown">
                                                                            <button type="button" class="btn btn-success light sharp" data-bs-toggle="dropdown">
                                                                                <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24" /><circle fill="#000000" cx="5" cy="12" r="2" /><circle fill="#000000" cx="12" cy="12" r="2" /><circle fill="#000000" cx="19" cy="12" r="2" /></g></svg>
                                                                            </button>
                                                                            <div class="dropdown-menu">
                                                                                <Button variant="link" onClick={() => Handelviewmodal(item._id)} class="dropdown-item">View</Button>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                )}
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}
export default Dashboard;