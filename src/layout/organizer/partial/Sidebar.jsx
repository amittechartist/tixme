import React from 'react';
import DashboardIcon from '../../../common/icon/dashboardicon.svg';
import EventIcon from '../../../common/icon/event 1.svg';
import ticketIcon from '../../../common/icon/ticket 1.svg';
import walletIcon from '../../../common/icon/wallet 1.svg';
import scannerIcon from '../../../common/icon/scanner 1.svg';
import MenuIcon from '../../../common/icon/Menu sidebar.svg';
import peopleIcon from '../../../common/icon/people 1.svg';
import supportIcon from '../../../common/icon/support.svg';
import { Link } from 'react-router-dom';
import {organizer_url} from '../../../common/Helpers';
const Sidebar = () => {
    return (
        <>
            <div className="deznav">
                <div className="deznav-scroll">
                    <ul className="metismenu" id="menu">
                        <li><Link to={organizer_url+'event/dashboard'} className="ai-icon" aria-expanded="false">
                            <img src={DashboardIcon} alt="Your Logo" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="has-arrow ai-icon" aria-expanded="false">
                            <img src={EventIcon} alt="Your Logo" />
                                <span class="nav-text">Event Management</span>
                            </a>
                            <ul aria-expanded="false">
                                <li><Link className='text-black' to={organizer_url+'event/add-event'}>Add New</Link></li>
                                <li><Link className='text-black' to={organizer_url+'event/add-event-basic-info'}>All Event </Link></li>
                                {/* <li><Link className='text-black' to={organizer_url+'event/add-event-details'}>Details </Link></li>
                                <li><Link className='text-black' to={organizer_url+'event/add-event-photos'}>Photos </Link></li> */}
                            </ul>
                        </li>

                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={ticketIcon} alt="Your Logo" />
                            <span className="nav-text">Event Bookings</span>
                        </Link>
                        </li>
                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={walletIcon} alt="Your Logo" />
                            <span className="nav-text">Finance</span>
                        </Link>
                        </li>
                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={scannerIcon} alt="Your Logo" />
                            <span className="nav-text">Tixme Scanner</span>
                        </Link>
                        </li>
                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={MenuIcon} alt="Your Logo" />
                            <span className="nav-text">Marketing</span>
                        </Link>
                        </li>
                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={peopleIcon} alt="Your Logo" />
                            <span className="nav-text">Manage Attendees</span>
                        </Link>
                        </li>
                        <li><Link href="reports.html" className="ai-icon" aria-expanded="false">
                            <img src={supportIcon} alt="Your Logo" />
                            <span className="nav-text">Support</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar;