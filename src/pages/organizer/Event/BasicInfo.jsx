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
                            <p>Add photos to show what your event will be about. You can upload up to 10 images.</p>
                            <div className="dropzone">
                                <div class="fallback">
                                    <input name="file " type="file" multiple />
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
