import React from "react";
import Header from './partial/Header';
import Footer from './partial/Footer';
import './partial/App.css';
const Layout = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}
export default Layout;