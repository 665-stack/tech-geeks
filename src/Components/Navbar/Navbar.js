import React from "react";
import './Navbar.css'
// import { NavLink } from "react-router-dom";
import Logo from "../../Assests/Image/techgeeklogo.png";
import "./Navbar.css";
import CustomLink from "../CustomLink/CustomLink";
import { useLocation } from "react-router-dom";


const Navbar = () => {

    const { pathname } = useLocation()
    console.log(pathname);

    return (
        <nav style={
            pathname.includes("blog") ? { display: "none" } : { display: 'flex' }
        }>

            <div className="logo-container">
                <img src={Logo} alt="Logo img" />
            </div>
            <div className="link-container">

                <CustomLink className='link' to='/'>Home</CustomLink>

                <CustomLink className='link' to='/videos'>Videos</CustomLink>
                <CustomLink className='link' to='/login'>Login</CustomLink>

            </div>
        </nav >
    );
};

export default Navbar;