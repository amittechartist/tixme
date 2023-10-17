import React from "react";
import JoinStartButton from "../../../common/elements/JoinStartButton";
import InfoIcon from "../../../common/icon/info.svg";
import LockIcon from "../../../common/icon/lock.svg";
import WorldIcon from "../../../common/icon/world.svg";
import Magnify from "../../../common/icon/magnify.svg";
import DateIcon from "../../../common/icon/date 1.svg";
import TimeIcon from "../../../common/icon/time 1.svg";
const Mycomponent = ({ title }) => {
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
                        <div className="col-md-6">
                            <label htmlFor="" className="text-black">Event Name</label>
                            <input type="text" class="form-control input-default " placeholder="Enter Event Name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="" className="text-black">Event Display Name <img src={InfoIcon} /></label>
                            <input type="text" class="form-control input-default " placeholder="Enter Event Display Name" />
                        </div>
                        <div className="col-md-2 mt-4">
                            <select class="default-select  form-control wide" >
                                <option>Type</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div className="col-md-2 mt-4">
                            <select class="default-select form-control wide" >
                                <option>Category</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
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
                                <span className="tab-button-active"><img src={WorldIcon} alt="" /> Public</span>
                                <span><img src={LockIcon} alt="" /> Private</span>
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
                                <input type="text" class="form-control" placeholder="Search for venue or address" />
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="">Date & Time</label>
                            <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                            <div className="tab-button-box">
                                <span className="tab-button-active">Single Event</span>
                                <span className=""> Recurring Event</span>
                            </div>
                        </div>
                        <div className="col-md-8 checkout-style-bottom">
                            <div className="row checkout-style-element">
                                <div className="col-md-1">
                                    <div class="input-group mb-3">
                                        <input type="checkbox" class="form-check-input" />
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
                        <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="12 Oct 2023" />
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="8:00 AM" />
                            </div>
                        </div>
                        <div className="col-md-8 checkout-style-bottom">
                        <div className="row checkout-style-element">
                                <div className="col-md-1">
                                    <div class="input-group mb-3">
                                        <input type="checkbox" class="form-check-input" />
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
                        <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={DateIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="12 Oct 2023" />
                            </div>
                        </div>
                        <div className="col-md-2">
                        <div class="input-group mb-3 input-warning-o">
                                <span class="input-group-text"><img src={TimeIcon} alt="" /></span>
                                <input type="text" class="form-control" placeholder="8:00 AM" />
                            </div>
                        </div>
                        <div className="col-md-8 checkout-style-bottom">
                        <div className="row checkout-style-element">
                                <div className="col-md-1">
                                    <div class="input-group mb-3">
                                        <input type="checkbox" class="form-check-input" />
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <p className="mb-0">Display end time.</p>
                                    <p className="mb-0">The end time of your event will be displayed to attendess.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <JoinStartButton title={'Next'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Mycomponent;
