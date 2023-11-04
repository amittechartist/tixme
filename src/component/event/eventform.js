import React, { useEffect, useState } from "react";
import GroupIcon from '../../common/icon/Group.svg';
import OnlineIcon from '../../common/icon/Host Online.svg';
import OffliveIcon from '../../common/icon/oflineeventlogo.svg';
import whitestar from '../../common/icon/whitestar.svg';
import Locationstart from '../../common/icon/locationstart.svg';
import InfoIcon from "../../common/icon/info.svg";
import LockIcon from "../../common/icon/lock.svg";
import WorldIcon from "../../common/icon/world.svg";
import Magnify from "../../common/icon/magnify.svg";
import DateIcon from "../../common/icon/date 1.svg";
import TimeIcon from "../../common/icon/time 1.svg";
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import Select from 'react-select'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { organizer_url, apiurl, get_date_time } from '../../common/Helpers';
import {
    Modal,
    Input,
    ModalBody,
    ModalHeader
} from 'reactstrap'
const Type = ({ title }) => {
    const [Loader, setLoader] = useState(false);
    const [Ticketshow, setTicketshow] = useState(false);
    const [FormSection, setFormSection] = useState(1);
    const [Eventtype, setEventtype] = useState();
    const [Name, setName] = useState();
    const [Displayname, setDisplayname] = useState();
    const [Type, setType] = useState(1);
    const [Category, setCategory] = useState();
    const [CategoryId, setCategoryId] = useState();
    const [Categoryname, setCategoryname] = useState();
    const [EventtypeCategory, setEventtypeCategory] = useState();
    const [EventtypeCategoryId, setEventtypeCategoryId] = useState();
    const [EventtypeCategoryname, setEventtypeCategoryname] = useState();
    const [Tag, setTag] = useState([]);
    const [Visibility, setVisibility] = useState(1);
    const [Location, setLocation] = useState();
    const [EventSubtype, setEventSubtype] = useState(1);
    const [Startdateselect, setStartdateselect] = useState(new Date());
    const [Enddateselect, setEnddateselect] = useState(new Date());
    const [IsclockCountdown, setIsclockCountdown] = useState(false);
    const [Displaystarttime, setDisplaystarttime] = useState(false);
    const [Displayendtime, setDisplayendtime] = useState(false);
    const [Eventdesc, setEventdesc] = useState();
    const [categoryList, setcategoryList] = useState([{ value: "", label: "Category" }]);
    const [EventtypecategoryList, setEventtypecategoryList] = useState([{ value: "", label: "Type" }]);

    const [Tickettype, setTickettype] = useState(1);
    const [Ticketname, setTicketname] = useState();
    const [Quantity, setQuantity] = useState();
    const [TicketStartdate, setTicketStartdate] = useState(new Date());
    const [TicketEndtdate, setTicketEndtdate] = useState(new Date());
    const [Price, setPrice] = useState();
    const [Pricedisable, setPricedisable] = useState(false);

    const handleIsclockCountdown = (event) => {
        setIsclockCountdown(event.target.checked); // Update state based on checkbox checked status
    };
    const handleDisplaystarttime = (event) => {
        setDisplaystarttime(event.target.checked); // Update state based on checkbox checked status
    };
    const handleDisplayendtime = (event) => {
        setDisplayendtime(event.target.checked); // Update state based on checkbox checked status
    };
    const fromgetdate = get_date_time(Startdateselect);
    var startdate = '';
    var starttime = '';
    if (fromgetdate) {
        startdate = fromgetdate[0].Dateview;
        starttime = fromgetdate[0].Timeview;
    }
    const togetdate = get_date_time(Enddateselect);
    var Enddate = '';
    var Rndtime = '';
    if (togetdate) {
        Enddate = togetdate[0].Dateview;
        Rndtime = togetdate[0].Timeview;
    }

    const fromticketgetdate = get_date_time(TicketStartdate);
    var ticketstartdate = '';
    var ticketstarttime = '';
    if (fromticketgetdate) {
        ticketstartdate = fromticketgetdate[0].Dateview;
        ticketstarttime = fromticketgetdate[0].Timeview;
    }
    const toticketgetdate = get_date_time(TicketEndtdate);
    var ticketenddate = '';
    var ticketendtime = '';
    if (toticketgetdate) {
        ticketenddate = toticketgetdate[0].Dateview;
        ticketendtime = toticketgetdate[0].Timeview;
    }

    function CheckBasicInfo() {
        setFormSection(3)
    }
    function CheckEventDesc() {
        setFormSection(4)
    }
    const HandelSubmit = async () => {
        try {
            setLoader(true);
            var event_type_name = '';
            if (Eventtype == 1) {
                var event_type_name = 'Online Event';
            } else {
                var event_type_name = 'Offline Event';
            }
            const requestData = {
                isdelete: 0,
                status: 0,
                eventtype: Eventtype,
                event_type_name: event_type_name,
                name: Name,
                display_name: Displayname,
                type: Type,
                category: CategoryId,
                category_name: Categoryname,
                eventtypecategory: EventtypeCategoryId,
                eventtypecategory_name: EventtypeCategoryname,
                tags: [],
                visibility: Visibility,
                location: Location,
                event_subtype_id: EventSubtype,
                start_date: startdate,
                start_time: starttime,
                end_date: Enddate,
                end_time: Rndtime,
                is_clock_countdown: IsclockCountdown,
                display_start_time: Displaystarttime,
                display_end_time: Displayendtime,
                event_desc: Eventdesc,
                event_image: [],
                organizer_id: 'saasasas',
            };
            fetch(apiurl + 'event/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
                .then(response => response.json())
                .then(data => {
                    setLoader(false);
                    if (data.success == true) {
                        toast.success('Created successful', {
                            duration: 3000,
                        });
                        emptyField('');
                        setFormSection(3);
                    } else {
                        toast.error(data.message);
                    }
                })
                .catch(error => {
                    setLoader(false);
                    console.error('Insert error:', error);
                });
        } catch (error) {
            console.error('Login api error:', error);
        }
    }
    function emptyField() {
        setFormSection(1);
        setEventtype('');
        setName('');
        setDisplayname('');
        setType('');
        setCategory('');
        setCategoryId('');
        setCategoryname('');
        Visibility(1);
        Location('');
        EventSubtype(1);
        IsclockCountdown(false);
        Displaystarttime(false);
        Displayendtime(false);
        Eventdesc('');
        setcategoryList({ value: "", label: "Category" });
        setEventtypecategoryList({ value: "", label: "Type" });
    }
    const selectCategory = (selectedValue) => {
        setCategory(selectedValue);
        setCategoryId(selectedValue.value);
        setCategoryname(selectedValue.label);
    };
    const selectEventtypeCategory = (selectedValue) => {
        setEventtypeCategory(selectedValue);
        setEventtypeCategoryId(selectedValue.value);
        setEventtypeCategoryname(selectedValue.label);
    };
    const fetchCategory = async () => {
        try {
            fetch(apiurl + 'category/get-category-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header to JSON
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        const categoryData = data.data;
                        const CategoryOption = categoryData.map(category => ({
                            value: category._id,
                            label: category.name
                        }));
                        setcategoryList(CategoryOption);
                    }
                })
                .catch(error => {
                    console.error('Insert error:', error);
                });
        } catch (error) {
            console.error('Login api error:', error);
        }
    }
    const handelCreateTicket = async () => {

    }
    const fetchEventtypeCategory = async () => {
        try {
            fetch(apiurl + 'category/get-event-type-list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the Content-Type header to JSON
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        const categoryData = data.data;
                        const CategoryOption = categoryData.map(category => ({
                            value: category._id,
                            label: category.name
                        }));
                        setEventtypecategoryList(CategoryOption);
                    }
                })
                .catch(error => {
                    console.error('Insert error:', error);
                });
        } catch (error) {
            console.error('Login api error:', error);
        }
    }
    const CategoryOption = [
        {
            options: categoryList
        }
    ]
    const EventtypeCategoryOption = [
        {
            options: EventtypecategoryList
        }
    ]
    function HandelCreateticket() {
        setTicketshow(true);
    }
    useEffect(() => {
        fetchCategory();
        fetchEventtypeCategory();
    }, []);
    return (
        <>
            <Row className="pb-2">
                <Col md={2} className="event-create-nav-bg">
                    <div className="event-create-nav">
                        <ul aria-expanded="false">
                            <li className={FormSection === 1 ? "active-event-form" : ''}><p variant="link" className='text-black'>Add New</p></li>
                            <li className={FormSection === 2 ? "active-event-form" : ''}><p variant="link" className='text-black'>Basic Info</p></li>
                            <li className={FormSection === 3 ? "active-event-form" : ''}><p variant="link" className='text-black'>Details</p></li>
                            <li onClick={() => setFormSection(4)} className={FormSection === 4 ? "active-event-form" : ''}><p variant="link" className='text-black'>Price</p></li>
                        </ul>
                    </div>
                </Col>
                <Col md={10}>
                    <Card>
                        <Card.Body className="py-5">
                            {FormSection === 1 ?
                                (
                                    <Row className="pb-5">
                                        <Col md={12} className="text-center mb-5">
                                            <h2 className="theme-color mb-2 ">Select Event Type</h2>
                                            <p className="text-black">Your one stop solution for managing and conducting events</p>
                                        </Col>
                                        <Col md={6} className="mt-5">
                                            <div className="event_category_box gradient-blue text-center float-right">
                                                <h3 className="event-category-title theme-color">Online Event</h3>
                                                <p className="event-category-desc text-black mb-4">Host online events using  Zoom, Google Meet, YouTube Live etc</p>
                                                <Button variant="link" className="button-join" onClick={() => { setEventtype(1); setFormSection(2); }}>
                                                    <span>
                                                        <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style">Create Event</span>
                                                    </span>
                                                </Button>
                                                <div className="icon_section">
                                                    <img src={GroupIcon} />
                                                    <img src={OnlineIcon} />
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} className="mt-5">
                                            <div className="event_category_box gradient-grey text-center">
                                                <h3 className="event-category-title theme-color">Physical Event</h3>
                                                <p className="event-category-desc text-black mb-4">Host in-person or outdoor events using our event management platform</p>
                                                <div className="button-group">
                                                    <Button variant="link" className="button-join" onClick={() => { setEventtype(2); setFormSection(2); }}>
                                                        <span>
                                                            <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style">Create Event</span>
                                                        </span>
                                                    </Button>
                                                </div>
                                                <div className="icon_section">
                                                    <img src={GroupIcon} />
                                                    <img src={OffliveIcon} />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                ) : (<></>)}
                            {FormSection === 2 ? (
                                <Row className="pb-5">
                                    <Col md={12} className="text-center mb-5">
                                        <h2 className="theme-color mb-2 ">Event Basic Info</h2>
                                    </Col>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="text-black">Event Name</label>
                                        <input type="text" class="form-control input-default" onChange={(e) => setName(e.target.value)} placeholder="Enter Event Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="" className="text-black">Event Display Name <img src={InfoIcon} /></label>
                                        <input type="text" class="form-control input-default " onChange={(e) => setDisplayname(e.target.value)} placeholder="Enter Event Display Name" />
                                    </div>
                                    <div className="col-md-2 mt-4">
                                        <Select
                                            isClearable={false}
                                            options={EventtypeCategoryOption}
                                            className='react-select select-theme'
                                            classNamePrefix='select'
                                            onChange={selectEventtypeCategory}
                                            value={EventtypeCategory}
                                        />
                                    </div>
                                    <div className="col-md-2 mt-4">
                                        <Select
                                            isClearable={false}
                                            options={CategoryOption}
                                            className='react-select select-theme'
                                            classNamePrefix='select'
                                            onChange={selectCategory}
                                            value={Category}
                                        />
                                    </div>
                                    <div className="col-md-8"></div>
                                    <div className="col-md-4 mt-4">
                                        <label htmlFor="">Tags</label>
                                        <p>Improve discoverability of your event by adding tags relevant to subject matter.</p>
                                        <input type="text" class="form-control input-default " placeholder="Add search keywords to your event" />
                                        <span className="mt-2">0 / 10 tags.</span>
                                    </div>
                                    <div className="col-md-8"></div>
                                    <div className="col-md-4 mt-4">
                                        <label htmlFor="">Event Visibility</label>
                                        <div className="tab-button-box">
                                            {/* tab-button-active */}
                                            <span onClick={() => setVisibility(1)} className={Visibility === 1 ? "tab-button-active" : ""}><img src={WorldIcon} alt="" /> Public</span>
                                            <span onClick={() => setVisibility(2)} className={Visibility === 2 ? "tab-button-active" : ""}><img src={LockIcon} alt="" /> Private</span>
                                        </div>
                                    </div>
                                    <div className="col-md-8"></div>
                                    <div className="col-md-6 mt-4">
                                        <label htmlFor="">Location</label>
                                        <p>Help people in the area discover your event and let attendees know where to show up.</p>
                                        <div className="tab-button-box">
                                            <span onClick={() => setEventtype(1)} className={Eventtype === 1 ? "tab-button-active" : "tab-button-grey-active"}>Venue</span>
                                            <span onClick={() => setEventtype(2)} className={Eventtype === 2 ? "tab-button-active" : "tab-button-grey-active"}> Online Event</span>
                                            <span onClick={() => setEventtype(3)} className={Eventtype === 3 ? "tab-button-active" : ""}>To be announced</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 mt-4">
                                        <label htmlFor="">Venue Location</label>
                                        <div class="input-group mb-3 input-warning-o">
                                            <span class="input-group-text"><img src={Magnify} alt="" /></span>
                                            <input onClick={() => setLocation(1)} type="text" class="form-control" placeholder="Search for venue or address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6"></div>
                                    <div className="col-md-4 mt-4">
                                        <label htmlFor="">Date & Time</label>
                                        <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                                        <div className="tab-button-box">
                                            <span onClick={() => setEventSubtype(1)} className={EventSubtype === 1 ? "tab-button-active" : ""}>Single Event</span>
                                            <span onClick={() => setEventSubtype(2)} className={EventSubtype === 2 ? "tab-button-active" : ""}> Recurring Event</span>
                                        </div>
                                    </div>
                                    <div className="col-md-8 checkout-style-bottom">
                                        <div className="row checkout-style-element">
                                            <div className="col-md-1">
                                                <div class="input-group mb-3">
                                                    <input checked={IsclockCountdown} onChange={handleIsclockCountdown} type="checkbox" class="form-check-input" />
                                                </div>
                                            </div>
                                            <div className="col-md-11">
                                                <p className="mb-0">Clock Timer ( Countdown )</p>
                                                <p className="mb-0">Clock timer of your event will be displayed to attendess.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4 mb-4">
                                        <p>Single event happens once and can last multiple days</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p>Event Starts</p>
                                    </div>
                                    <div className="col-md-2">
                                        <div class="input-group mb-3 input-warning-o" style={{ position: 'relative' }}>
                                            <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                            <input type="text" class="form-control date-border-redius" placeholder="" readOnly value={startdate} />
                                            <div className="date-style-picker">
                                                <Flatpickr
                                                    value={Startdateselect}
                                                    data-enable-time
                                                    id='date-picker'
                                                    className='form-control'
                                                    onChange={date => setStartdateselect(date)}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-2">
                                        <div class="input-group mb-3 input-warning-o">
                                            <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                            <input type="text" class="form-control" placeholder="" readOnly value={starttime} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 checkout-style-bottom">
                                        <div className="row checkout-style-element">
                                            <div className="col-md-1">
                                                <div class="input-group mb-3">
                                                    <input checked={Displaystarttime} onChange={handleDisplaystarttime} type="checkbox" class="form-check-input" />
                                                </div>
                                            </div>
                                            <div className="col-md-11">
                                                <p className="mb-0">Display start time.</p>
                                                <p className="mb-0">The start time of your event will be displayed to attendess.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <p>Event Ends</p>
                                    </div>
                                    <div className="col-md-2">
                                        <div class="input-group mb-3 input-warning-o" style={{ position: 'relative' }}>
                                            <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                            <input type="text" class="form-control date-border-redius" placeholder="" readOnly value={Enddate} />
                                            <div className="date-style-picker">
                                                <Flatpickr
                                                    value={Enddateselect}
                                                    data-enable-time
                                                    id='date-picker'
                                                    className='form-control'
                                                    onChange={date => setEnddateselect(date)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div class="input-group mb-3 input-warning-o">
                                            <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                            <input type="text" class="form-control" placeholder="" readOnly value={Rndtime} />
                                        </div>
                                    </div>
                                    <div className="col-md-8 checkout-style-bottom">
                                        <div className="row checkout-style-element">
                                            <div className="col-md-1">
                                                <div class="input-group mb-3">
                                                    <input checked={Displayendtime} onChange={handleDisplayendtime} type="checkbox" class="form-check-input" />
                                                </div>
                                            </div>
                                            <div className="col-md-11">
                                                <p className="mb-0">Display end time.</p>
                                                <p className="mb-0">The end time of your event will be displayed to attendess.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="button-group mt-10">
                                            <Button variant="link" className="button-join" onClick={() => setFormSection(1)}>
                                                <span>
                                                    <span className="bg-style bg-dark"><img height={30} width={30} src={whitestar} /></span><span className="bg-dark bg-style bg-title-style">Back</span>
                                                </span>
                                            </Button>
                                            <Button variant="link" className="button-join" onClick={() => CheckBasicInfo()}>
                                                <span>
                                                    <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Next</span>
                                                </span>
                                            </Button>
                                        </div>
                                    </div>
                                </Row>
                            ) : (<></>)}
                            {FormSection === 3 ? (
                                <Row>
                                    <Col md={12} className="text-center mb-5">
                                        <h2 className="theme-color mb-2 ">Event Images</h2>
                                    </Col>
                                    <div className="col-md-12 mb-5">
                                        <h4 className="mb-2">About this event</h4>
                                        <p>Add photos to show what your event will be about. You can upload up to 10 images.</p>
                                        <div className="dropzone">
                                            <div class="fallback">
                                                <input name="file " type="file" multiple />
                                            </div>
                                        </div>
                                    </div>
                                    <Col md={12} className="text-center mb-5">
                                        <h2 className="theme-color mb-2 ">Event Description</h2>
                                    </Col>
                                    <div className="col-md-12">
                                        <h4 className="mb-2">About this event</h4>
                                        <textarea className="custome-text-area" placeholder="Description" onChange={(e) => setEventdesc(e.target.value)}></textarea>

                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <h3 className="text-grey">Add more sections to your event page</h3>
                                        <p className="text-light-grey">Help people in the area discover your event and let attendees know where to <br /> show up.</p>
                                    </div>
                                    <div className="col-md-12 mt-2 d-flex align-items-center">
                                        <span className="theme-color text-bold-600 font-30 mr-3">FAQ</span> <button className="btn-2" type="button">Add <img src={Locationstart} /></button>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="col-md-12 mt-2">
                                            <div className="button-group mt-10">
                                                <Button variant="link" className="button-join" onClick={() => setFormSection(2)}>
                                                    <span>
                                                        <span className="bg-style bg-dark"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-dark bg-title-style">Back</span>
                                                    </span>
                                                </Button>
                                                <Button variant="link" className="button-join" onClick={() => CheckEventDesc()}>
                                                    <span>
                                                        <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Next</span>
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Row>
                            ) : (<></>)}
                            {FormSection === 4 ? (
                                <Row>
                                    <Col md={12} className="text-center mb-5">
                                        <h2 className="theme-color mb-2 ">Event Price</h2>
                                    </Col>
                                    <Col md={12} className="">
                                        <Button variant="link" className="button-join" onClick={HandelCreateticket}>
                                            <span>
                                                <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Add Ticket</span>
                                            </span>
                                        </Button>
                                    </Col>
                                    <div className="col-md-12 mt-2">
                                        <div className="button-group mt-10">
                                            <Button variant="link" className="button-join" onClick={() => setFormSection(3)}>
                                                <span>
                                                    <span className="bg-style bg-dark"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-dark bg-title-style">Back</span>
                                                </span>
                                            </Button>
                                            {Loader ? (
                                                <Button variant="link" className="button-join" type="button">
                                                    <span>
                                                        <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Please wait...</span>
                                                    </span>
                                                </Button>
                                            ) : (
                                                <Button variant="link" className="button-join" onClick={HandelSubmit}>
                                                    <span>
                                                        <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Submit</span>
                                                    </span>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </Row>
                            ) : (<></>)}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal isOpen={Ticketshow} toggle={() => setTicketshow(!Ticketshow)} className='modal-dialog-centered modal-lg'>
                <ModalHeader className='bg-transparent' toggle={() => setTicketshow(!Ticketshow)}>Create new ticket</ModalHeader>
                <ModalBody className=''>
                    <Row>
                        <Col md={12} className="justify-content-center d-flex">
                            <div className="tab-button-box">
                                {/* tab-button-active */}
                                <span onClick={() => { setTickettype(1); setPricedisable(false); }} className={Tickettype === 1 ? "tab-button-active" : ""}>Paid</span>
                                <span onClick={() => { setTickettype(2); setPricedisable(true); setPrice(''); }} className={Tickettype === 2 ? "tab-button-active" : ""}>Free</span>
                                <span onClick={() => { setTickettype(3); setPricedisable(true); setPrice(''); }} className={Tickettype === 3 ? "tab-button-active" : ""}>Donation</span>
                            </div>
                        </Col>
                        <Col md={12} className="mb-2 mt-4">
                            <label htmlFor="" className="text-black">Name</label>
                            <input type="text" class="form-control input-default" onChange={(e) => setTicketname(e.target.value)} placeholder="Name" />
                        </Col>
                        <Col md={6} className="mb-2">
                            <label htmlFor="" className="text-black">Available quantity</label>
                            <input type="number" class="form-control input-default" onChange={(e) => setQuantity(e.target.value)} placeholder="Available quantity" />
                        </Col>
                        <Col md={6} className="mb-2">
                            <label htmlFor="" className="text-black">Price</label>
                            <Input type="number" disabled={Pricedisable} class="form-control input-default" value={Price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
                        </Col>
                        <Col md={4} className="mb-2 mt-4">
                            <label htmlFor="" className="text-black">Start date</label>
                            <div class="input-group mb-3 input-warning-o" style={{ position: 'relative' }}>
                                <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                <input type="text" class="form-control date-border-redius" placeholder="" readOnly value={ticketstartdate} />
                                <div className="date-style-picker">
                                    <Flatpickr
                                        value={TicketStartdate}
                                        data-enable-time
                                        id='date-picker'
                                        className='form-control'
                                        onChange={date => setTicketStartdate(date)}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-2  mt-4">
                            <label htmlFor="" className="text-black">Start time</label>
                            <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="" readOnly value={ticketstarttime} />
                            </div>
                        </Col>
                        <Col md={12} className="mb-2"></Col>
                        <Col md={4} className="mb-2">
                            <label htmlFor="" className="text-black">End date</label>
                            <div class="input-group mb-3 input-warning-o" style={{ position: 'relative' }}>
                                <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                <input type="text" class="form-control date-border-redius" placeholder="" readOnly value={ticketenddate} />
                                <div className="date-style-picker">
                                    <Flatpickr
                                        value={TicketEndtdate}
                                        data-enable-time
                                        id='date-picker'
                                        className='form-control'
                                        onChange={date => setTicketEndtdate(date)}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="mb-2">
                            <label htmlFor="" className="text-black">End time</label>
                            <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="" readOnly value={ticketendtime} />
                            </div>
                        </Col>
                        <Col md={12}>
                            <Button variant="link" className="button-join p-0" onClick={() => handelCreateTicket()}>
                                <span>
                                    <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Add ticket</span>
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal >
        </>
    )
}
export default Type;