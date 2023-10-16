import React from "react";
import DashboardIcon from '../../../common/icon/dashboardicon.svg';
import LocationsIcon from '../../../common/icon/locations.svg';
import Locationstart from '../../../common/icon/locationstart.svg';
import PersonIcon from '../../../common/icon/person 1.svg';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div class="header">
                <div class="header-content">
                    <nav class="navbar navbar-expand">
                        <div class="collapse navbar-collapse justify-content-between">
                            <div class="header-left">

                            </div>
                            <ul class="navbar-nav header-right">

                                <li class="nav-item dropdown notification_dropdown">
                                <Link to={'/'}><span className=""> <img src={DashboardIcon} alt="Your Logo" /> Dashboard</span></Link>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <Link className="button-border" to={'/'}>
                                        <span>
                                            <img src={LocationsIcon}/> Location <img src={Locationstart}/>
                                        </span>
                                    </Link>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <Link className="button-join" to={'/'}>
                                        <span>
                                             <span className="bg-style"><img height={30} width={30} src={PersonIcon}/></span><span className="bg-style">My Account</span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Header;