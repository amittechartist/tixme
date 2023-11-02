import React from "react";
import Header from './partial/Header';
import Sidebar from './partial/Sidebar';
import Footer from './partial/Footer';
import Logo from '../../common/logo.svg';
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
    return (
        <>
            <div id="main-wrapper">
                <div className="nav-header">
                    <Link  className="brand-logo">
                        <img src={Logo} alt="Your Logo" />
                    </Link>
                </div>
                <Header />
                <Sidebar />
                {children}
                <Footer />
            </div>
        </>
    )
}
export default Layout;