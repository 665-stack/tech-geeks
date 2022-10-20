import React, { useEffect } from "react";
import './Navbar.css'
// import { NavLink } from "react-router-dom";
import Logo from "../../Assests/Image/techgeeklogo.png";
import "./Navbar.css";
import CustomLink from "../CustomLink/CustomLink";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";


const Navbar = () => {
    const { pathname } = useLocation()
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser({});
            }
        });

    }, [])
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            });
    }

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

                <p className="userName">{user?.displayName}</p>
                <div>
                    {
                        user.uid
                            ?
                            <button onClick={handleSignOut} className="logOutButton">Logout</button>
                            :
                            <CustomLink CustomLink className='link' to='/login'>Login</CustomLink>
                    }
                </div>



            </div>
        </nav >
    );
};

export default Navbar;