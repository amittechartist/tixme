import React from "react";
import Locationstart from '../../../common/icon/locationstart.svg';
import JoinStartButton from "../../../common/elements/JoinStartButton";
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
                        <div className="col-md-12">
                            <h4 className="mb-2">About this event</h4>
                            <textarea className="custome-text-area" placeholder="Description"></textarea>

                        </div>
                        <div className="col-md-12 mt-2">
                            <h3 className="text-grey">Add more sections to your event page</h3>
                            <p className="text-light-grey">Help people in the area discover your event and let attendees know where to <br /> show up.</p>
                        </div>
                        <div className="col-md-12 mt-2 d-flex align-items-center">
                            <span className="theme-color text-bold-600 font-30 mr-3">FAQ</span> <button className="btn-2" type="button">Add <img src={Locationstart} /></button>
                        </div>
                        <div className="col-md-12 mt-2">
                            <JoinStartButton title={'Next'}/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Mycomponent;
