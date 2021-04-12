import React from 'react';
import './Navbar.css';
import LogoTransparent from './../../Images/logo_transparentBackground.png'
function NavBar(props) {
    return (
        <div className="Navbar">
           <div className="NavLogo">
                <img className="LogoImg" src={LogoTransparent} alt="LoadingError"></img>
           </div>

           {/* <div className="NavItems">
           * Navigation items here
           </div> */}

           <div className="NavText">
                CALL US         <a href="tel:1-888-444-5555">
                                         1-888-444-5555
                                </a>
           </div>
        </div>
    );
}

export default NavBar;