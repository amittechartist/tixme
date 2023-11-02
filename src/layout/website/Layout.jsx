import React from "react";
import Header from './partial/Header';
import Footer from './partial/Footer';
import './partial/App.css';
import './partial/Responsive.css';
import { Toaster } from 'react-hot-toast'
const Layout = ({ children }) => {
    return (
        <>
            <Toaster position="top-center"/>
            <Header />
                {children}
            <Footer />
        </>
    )
}
export default Layout;