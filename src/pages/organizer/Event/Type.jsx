import React from "react";
import GroupIcon from '../../../common/icon/Group.svg';
import OnlineIcon from '../../../common/icon/Host Online.svg';
import OffliveIcon from '../../../common/icon/oflineeventlogo.svg';
import whitestar from '../../../common/icon/whitestar.svg';
import { Link } from "react-router-dom";
import JoinStartButton from "../../../common/elements/JoinStartButton";
const Type = ({ title }) => {
    return (
        <>
            <div className="content-body">

                <div className="container-fluid">
                    <div className="page-titles">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{title}</li>
                        </ol>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="theme-color mb-2 ">Select Event Type</h2>
                                <p className="text-black">Your one stop solution for managing and conducting events</p>
                            </div>
                        </div>
                        <div className="row mt-20">
                            <div className="col-md-6">
                                <div className="event_category_box gradient-blue text-center float-right">
                                    <h3 className="event-category-title theme-color">Online Event</h3>
                                    <p className="event-category-desc text-black mb-4">Host online events using  Zoom, Google Meet, YouTube Live etc</p>
                                    <JoinStartButton title={'Create Event'}/>
                                    <div className="icon_section">
                                        <img src={GroupIcon} />
                                        <img src={OnlineIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="event_category_box gradient-grey text-center">
                                    <h3 className="event-category-title theme-color">Physical Event</h3>
                                    <p className="event-category-desc text-black mb-4">Host in-person or outdoor events using our event management platform</p>
                                    <div className="button-group">
                                        <Link className="button-join" to={'/'}>
                                            <span>
                                                <span className="bg-style"><img height={30} width={30} src={whitestar} /></span><span className="bg-style">Create Event</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="icon_section">
                                        <img src={GroupIcon} />
                                        <img src={OffliveIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Type;