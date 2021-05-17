import { Link } from "react-router-dom";
import React, { useState } from 'react'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    let navbar = `navbar-list `;
    if (showMenu === true) {
        navbar += `active`;
    }

    const clearState = () => {
        setShowMenu(false);
    }

    return (
        <nav>
            <div className='logo-container'>
                <Link onClick={clearState} to='/'>
                    Artist Hoang
                </Link>
            </div>
            <div className={`toggle ${showMenu ? "change" : ""}`} onClick={() => setShowMenu(!showMenu)}>
                <div className="bar1 "></div>
                <div className="bar2 "></div>
                <div className="bar3 "></div>
            </div>
            <ul className={navbar}>
                <li>
                    <Link onClick={clearState} to='/' >Home</Link>
                </li>
                <li>
                    <Link onClick={clearState} to='/collection' >My Collection</Link>
                </li>
                <li>
                    <Link onClick={clearState} to='/exhibition' >Exhibition</Link>
                </li>
                <li>
                    <Link onClick={clearState} to='/about'>About</Link>
                </li>
                <li>
                    <Link onClick={clearState} to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav >

    )
}




export default Navbar
