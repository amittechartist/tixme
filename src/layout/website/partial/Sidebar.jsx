import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Locationstart from '../../../common/icon/locationstart.svg';
const Sidebar = () => {
    return (
        <Col md={6} className="pt-3 pb-3">
            <ul className="website_top_menu float-right">
                <li className="nav-item">
                    <Link to={'/'}>
                        <span>
                            Events <img src={Locationstart} />
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="button-join" to={'/'}>
                        <span>
                            About Us
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="button-join" to={'/'}>
                        <span>
                            Contact
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="button-border" to={'/'}>
                        <span>
                            List your event
                        </span>
                    </Link>
                </li>
            </ul>
        </Col>
    )
}
export default Sidebar;