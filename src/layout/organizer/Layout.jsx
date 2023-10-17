import React from "react";
import Header from './partial/Header';
import Sidebar from './partial/Sidebar';
import Footer from './partial/Footer';
import Logo from '../../common/logo.svg';
const Layout = ({ children }) => {
    return (
        <>
            <div id="main-wrapper">
                <div className="nav-header">
                    <a href="" className="brand-logo">
                        <img src={Logo} alt="Your Logo" />
                    </a>
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