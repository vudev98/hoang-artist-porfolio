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
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src='' alt='logo'></img>
                </Link>
            </div>
            <Navbar />
        </div>
    )
}

export default Header
