import React from 'react';
import DashboardIcon from '../../../common/icon/dashboardicon.svg';
import EventIcon from '../../../common/icon/event 1.svg';
import ticketIcon from '../../../common/icon/ticket 1.svg';
import walletIcon from '../../../common/icon/wallet 1.svg';
import scannerIcon from '../../../common/icon/scanner 1.svg';
import MenuIcon from '../../../common/icon/Menu sidebar.svg';
import peopleIcon from '../../../common/icon/people 1.svg';
import supportIcon from '../../../common/icon/support.svg';
import { Link,useNavigate } from 'react-router-dom';
import {admin_url,app_url} from '../../../common/Helpers';
const Sidebar = () => {
    const navigate = useNavigate();
    function Logout(){
        localStorage.removeItem('adminauth');
        navigate(app_url);
    }
    return (
        <>
            <div className="deznav">
                <div className="deznav-scroll">
                    <ul className="metismenu" id="menu">
                        <li><Link to={admin_url+'dashboard'} className="ai-icon" aria-expanded="false">
                            <img src={DashboardIcon} alt="Your Logo" />
                            <span className="nav-text">Dashboard</span>
                        </Link>
                        </li>
                        <li>
                            <Link class="has-arrow ai-icon" href="javascript:void(0);" aria-expanded="false">
                            <img src={EventIcon} alt="Your Logo" />
                                <span class="nav-text">Category</span>
                            </Link>
                            <ul aria-expanded="false">
                                <li><Link className='text-black' to={admin_url+'add-category'}>Add New</Link></li>
                                <li><Link className='text-black' to={admin_url+'all-category'}>All Category</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div onClick={Logout} className="ai-icon cursor-pointer" aria-expanded="false">
                                <img src={DashboardIcon} alt="Your Logo" />
                                <span className="nav-text">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar;