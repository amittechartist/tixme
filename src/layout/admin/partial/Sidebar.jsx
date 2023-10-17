import React from 'react';
import DashboardIcon from '../../../common/icon/dashboardicon.svg';
import EventIcon from '../../../common/icon/event 1.svg';
import ticketIcon from '../../../common/icon/ticket 1.svg';
import walletIcon from '../../../common/icon/wallet 1.svg';
import scannerIcon from '../../../common/icon/scanner 1.svg';
import MenuIcon from '../../../common/icon/Menu sidebar.svg';
import peopleIcon from '../../../common/icon/people 1.svg';
import supportIcon from '../../../common/icon/support.svg';
const Sidebar = () => {
    return (
        <>
            <div class="deznav">
                <div class="deznav-scroll">
                    <ul class="metismenu" id="menu">
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={DashboardIcon} alt="Your Logo" />
                            <span class="nav-text">Dashboard</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={EventIcon} alt="Your Logo" />
                            <span class="nav-text">Event Management</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={ticketIcon} alt="Your Logo" />
                            <span class="nav-text">Event Bookings</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={walletIcon} alt="Your Logo" />
                            <span class="nav-text">Finance</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={scannerIcon} alt="Your Logo" />
                            <span class="nav-text">Tixme Scanner</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={MenuIcon} alt="Your Logo" />
                            <span class="nav-text">Marketing</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={peopleIcon} alt="Your Logo" />
                            <span class="nav-text">Manage Attendees</span>
                        </a>
                        </li>
                        <li><a href="reports.html" class="ai-icon" aria-expanded="false">
                            <img src={supportIcon} alt="Your Logo" />
                            <span class="nav-text">Support</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar;