import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import { Nav, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='navber'>
            <NavLink className="container container-parants ">
                <div className="logo">
                    <Link to='/home'>Volunteer_NT</Link>
                </div>
                <Nav className="leftNav">
                    <Link to='/home'>Home</Link>
                    <Link to='/event'>Event</Link>
                </Nav>
            </NavLink>
        </div>

    )
}

export default Header