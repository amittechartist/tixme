import React, { useEffect, useState } from "react";
import GroupIcon from '../../../common/icon/Group.svg';
import OnlineIcon from '../../../common/icon/Host Online.svg';
import OffliveIcon from '../../../common/icon/oflineeventlogo.svg';
import whitestar from '../../../common/icon/whitestar.svg';
import Locationstart from '../../../common/icon/locationstart.svg';
import InfoIcon from "../../../common/icon/info.svg";
import LockIcon from "../../../common/icon/lock.svg";
import WorldIcon from "../../../common/icon/world.svg";
import Magnify from "../../../common/icon/magnify.svg";
import DateIcon from "../../../common/icon/date 1.svg";
import TimeIcon from "../../../common/icon/time 1.svg";
import { Button, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import Select from 'react-select'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { organizer_url, apiurl } from '../../../common/Helpers';
import JoinStartButton from "../../../common/elements/JoinStartButton";
const Type = ({ title }) => {
    const [Loader, setLoader] = useState(false);
    const [FormSection, setFormSection] = useState(1);
    const [Eventtype, setEventtype] = useState();
    const [Name, setName] = useState();
    const [Displayname, setDisplayname] = useState();
    const [Type, setType] = useState(1);
    const [Category, setCategory] = useState();
    const [CategoryId, setCategoryId] = useState();
    const [Categoryname, setCategoryname] = useState();
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
    const [categoryList, setcategoryList] = useState([
        { value: "", label: "" },
    ]);
    const handleIsclockCountdown = (event) => {
        setIsclockCountdown(event.target.checked); // Update state based on checkbox checked status
    };
    const handleDisplaystarttime = (event) => {
        setDisplaystarttime(event.target.checked); // Update state based on checkbox checked status
    };
    const handleDisplayendtime = (event) => {
        setDisplayendtime(event.target.checked); // Update state based on checkbox checked status
    };
    const form_formatDateTime = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateParts = new Intl.DateTimeFormat('en-US', options).formatToParts(new Date(date));

        const formattedDate = dateParts[2].value + ' ' + dateParts[0].value + ' ' + dateParts[4].value;
        const formattedTime = new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return { startdate: formattedDate, starttime: formattedTime };
    };
    const to_formatDateTime = (date) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateParts = new Intl.DateTimeFormat('en-US', options).formatToParts(new Date(date));

        const formattedDate = dateParts[2].value + ' ' + dateParts[0].value + ' ' + dateParts[4].value;
        const formattedTime = new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return { enddate: formattedDate, endtime: formattedTime };
    };
    const { startdate, starttime } = form_formatDateTime(Startdateselect);
    const { enddate, endtime } = to_formatDateTime(Enddateselect);

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
            if(Eventtype == 1){
                var event_type_name = 'Online Event';
            }else{
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
                tags: [],
                visibility: Visibility,
                location: Location,
                event_subtype_id: EventSubtype,
                start_date: startdate,
                start_time: starttime,
                end_date: enddate,
                end_time: endtime,
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
    function emptyField(){
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
        setcategoryList({ value: "", label: "" });
    }
    const selectCategory = (selectedValue) => {
        setCategory(selectedValue);
        setCategoryId(selectedValue.value);
        setCategoryname(selectedValue.label);
    };
    console.log(CategoryId);
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

    const CategoryOption = [
        {
            options: categoryList
        }
    ]
    useEffect(() => {
        fetchCategory();
    }, []);
    return (
        <>
            <div className="content-body" style={{ background: '#F1F1F1' }}>
                <div className="container-fluid">
                    <div className="page-titles">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{title}</li>
                        </ol>
                    </div>
                    <Row className="pb-2">
                        <Col md={2} className="event-create-nav-bg">
                            <div className="event-create-nav">
                                <ul aria-expanded="false">
                                    <li className={FormSection === 1 ? "active-event-form" : ''}><p variant="link" className='text-black'>Add New</p></li>
                                    <li className={FormSection === 2 ? "active-event-form" : ''}><p variant="link" className='text-black'>Basic Info</p></li>
                                    <li className={FormSection === 3 ? "active-event-form" : ''}><p variant="link" className='text-black'>Details</p></li>
                                    <li className={FormSection === 4 ? "active-event-form" : ''}><p variant="link" className='text-black'>Photos</p></li>
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
                                                <select class="default-select form-control wide" >
                                                    <option>Type</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                </select>
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
                                                    <span className="tab-button-active">Venue</span>
                                                    <span className="tab-button-grey-active"> Online Event</span>
                                                    <span>To be announced</span>
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
                                                    <input type="text" class="form-control" placeholder="" readOnly value={startdate} />
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
                                                    <input type="text" class="form-control" placeholder="" readOnly value={enddate} />
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
                                                    <input type="text" class="form-control" placeholder="" readOnly value={endtime} />
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
                                                    <Button variant="link" className="button-join" onClick={() => CheckBasicInfo()}>
                                                        <span>
                                                            <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Next</span>
                                                        </span>
                                                    </Button>
                                                    <Button variant="link" className="button-join" onClick={() => setFormSection(1)}>
                                                        <span>
                                                            <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Back</span>
                                                        </span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Row>
                                    ) : (<></>)}
                                    {FormSection === 3 ? (
                                        <Row>
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
                                                        <Button variant="link" className="button-join" onClick={() => CheckEventDesc()}>
                                                            <span>
                                                                <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Next</span>
                                                            </span>
                                                        </Button>
                                                        <Button variant="link" className="button-join" onClick={() => setFormSection(2)}>
                                                            <span>
                                                                <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Back</span>
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
                                                <h2 className="theme-color mb-2 ">Event Images</h2>
                                            </Col>
                                            <div className="col-md-12">
                                                <h4 className="mb-2">About this event</h4>
                                                <p>Add photos to show what your event will be about. You can upload up to 10 images.</p>
                                                <div className="dropzone">
                                                    <div class="fallback">
                                                        <input name="file " type="file" multiple />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-2">
                                                <div className="button-group mt-10">
                                                    <Button variant="link" className="button-join" onClick={() => setFormSection(3)}>
                                                        <span>
                                                            <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style bg-title-style">Back</span>
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
                </div>
            </div>

        </>
    )
}
export default Type;