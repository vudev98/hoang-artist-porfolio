import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import Navbar from '../components/Navbar'

const Header = () => {
    return (
        <div className='navbar-container'>
            <div className='logo-container'>
                <Link to='/' className='navbar-logo'>
                    <img src='./sample-logo.jpg' alt='logo' style={{ height: 50, width: 70 }}></img>
                </Link>
            </div>
            <Navbar />
        </div >
    )
}

export default Header
