import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import DropDown from "./Dropdown";
import "./navbar.css";
import { FaApple } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const myStateForLogin = useSelector((state) => state.sessionReducer)
    let login = myStateForLogin.loggedInUser;
    let isLoggedIn = login.email;

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <div>
            <Container>
                <nav className="main-nav">
                    {/* 1st logo part  */}
                    <div className="logoContainer">
                        <NavLink to="/" className="logo"> <FaApple size={50} />
                        </NavLink>
                        {/* <h6 >Think Different</h6> */}
                    </div>

                    {/* 2nd menu part  */}
                    <div
                        className={
                            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                        }>
                        <ul className="list">
                            <li>
                                <NavLink to="/about" onClick={() => { setShowMediaIcons(false) }}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product/Products/iphone" onClick={() => { setShowMediaIcons(false) }}>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" onClick={() => { setShowMediaIcons(false) }}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/access" onClick={() => { setShowMediaIcons(false) }}>Accessories</NavLink>
                            </li>
                            {isLoggedIn ? (<Typography >
                                <DropDown />
                            </Typography>) :
                                (<li>
                                    <NavLink to="/login" onClick={() => { setShowMediaIcons(false) }}><Button variant="contained" color="primary">Log In</Button ></NavLink>
                                </li>)}
                        </ul>
                    </div>

                    <div className="social-media">
                        {/* hamburget menu start  */}
                        <div className="hamburger-menu">
                            <a href=" #" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                                <GiHamburgerMenu />
                            </a>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;