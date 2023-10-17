import React from "react";
import Header from './partial/Header';
import Sidebar from './partial/Sidebar';
import Footer from './partial/Footer';
import Logo from '../../common/logo.svg';
const Layout = () => {
    return (
        <>
            <div id="main-wrapper">
                <div class="nav-header">
                    <a href="" class="brand-logo">
                        <img src={Logo} alt="Your Logo" />
                    </a>
                </div>

                <Header/>

                <Sidebar/>


                <div class="event-sidebar dz-scroll" id="eventSidebar">
                    <div class="card shadow-none rounded-0 bg-transparent h-auto mb-0">
                        <div class="card-body text-center event-calender pb-2">
                            <input type='text' class="form-control d-none" id='datetimepicker1' />
                        </div>
                    </div>
                    <div class="card shadow-none rounded-0 bg-transparent h-auto">
                        <div class="card-header border-0 pb-0">
                            <h4 class="text-black">Upcoming Events</h4>
                        </div>
                        <div class="card-body">
                            <div class="media mb-5 align-items-center event-list">
                                <div class="p-3 text-center rounded me-3 date-bx bgl-primary">
                                    <h2 class="mb-0 text-black">3</h2>
                                    <h5 class="mb-1 text-black">Wed</h5>
                                </div>
                                <div class="media-body px-0">
                                    <h6 class="mt-0 mb-3 fs-14"><a class="text-black" href="javascript:void(0);">Live Concert Choir Charity Event 2020</a></h6>
                                    <ul class="fs-14 list-inline mb-2 d-flex justify-content-between">
                                        <li>Ticket Sold</li>
                                        <li>561/650</li>
                                    </ul>
                                    <div class="progress mb-0" style={{ height: '4px', width: '100%' }}>
                                        <div class="progress-bar bg-warning progress-animated" style={{ width: '85%', height: '8px' }} role="progressbar">
                                            <span class="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="media mb-5 align-items-center event-list">
                                <div class="p-3 text-center rounded me-3 date-bx bgl-primary">
                                    <h2 class="mb-0 text-black">16</h2>
                                    <h5 class="mb-1 text-black">Tue</h5>
                                </div>
                                <div class="media-body px-0">
                                    <h6 class="mt-0 mb-3 fs-14"><a class="text-black" href="javascript:void(0);">Beautiful Fireworks Show In The New Year Night</a></h6>
                                    <ul class="fs-14 list-inline mb-2 d-flex justify-content-between">
                                        <li>Ticket Sold</li>
                                        <li>431/650</li>
                                    </ul>
                                    <div class="progress mb-0" style={{ height: '4px', width: '100%' }}>
                                        <div class="progress-bar bg-warning progress-animated" style={{ width: '50%', height: '8px' }} role="progressbar">
                                            <span class="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="media mb-0 align-items-center event-list">
                                <div class="p-3 text-center rounded me-3 date-bx bgl-success">
                                    <h2 class="mb-0 text-black">28</h2>
                                    <h5 class="mb-1 text-black">Fri</h5>
                                </div>
                                <div class="media-body px-0">
                                    <h6 class="mt-0 mb-3 fs-14"><a class="text-black" href="javascript:void(0);">The Story Of Danau Toba (Musical Drama)</a></h6>
                                    <ul class="fs-14 list-inline mb-2 d-flex justify-content-between">
                                        <li>Ticket Sold</li>
                                        <li>650/650</li>
                                    </ul>
                                    <div class="progress mb-0" style={{ height: '4px', width: '100%' }}>
                                        <div class="progress-bar bg-success progress-animated" style={{ width: '100%', height: '8px' }} role="progressbar">
                                            <span class="sr-only">60% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer justify-content-between border-0 d-flex fs-14">
                            <span>5 events more</span>
                            <a href="javascript:void(0);" class="text-primary">View more <i class="las la-long-arrow-alt-right scale5 ms-2"></i></a>
                        </div>
                    </div>
                    <div class="card shadow-none rounded-0 bg-transparent h-auto mb-0">
                        <div class="card-body text-center event-calender">
                            <a href="javascript:void(0);" class="btn btn-primary btn-rounded btn-lg shadow">
                                + New Event
                            </a>
                        </div>
                    </div>
                </div>

                <div class="content-body">

                    <div class="container-fluid">
                        <div class="page-titles">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                            </ol>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-xxl-5">
                                <div class="row"></div>
                            </div>
                            <div class="col-xl-9 col-xxl-7">
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default Layout;