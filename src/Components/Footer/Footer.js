import React from 'react';
import './Footer.css'
import Aux from '../../hoc/Aux1'
import FooterLinkElement from '../.atoms/FooterLinkElement'
import LogoWhite from './../../Images/LogoWhite.png'
import { FiInstagram } from "react-icons/fi";
import {AiFillFacebook} from "react-icons/ai";
function Footer(props) {
    return (
    <Aux>
        <div className="Footer">
            <div className="FooterLinks">
                    <FooterLinkElement>
                         <img className="FooterLogoImg" src={LogoWhite} alt="LoadingError"></img>
                    </FooterLinkElement>

                    <FooterLinkElement>
                        Contact Us
                    </FooterLinkElement>

                    <FooterLinkElement>
                        Privacy policy
                    </FooterLinkElement>

                    <FooterLinkElement>
                        <div className="FooterIcon">
                            <AiFillFacebook/>  <FiInstagram/>
                        </div>
                    </FooterLinkElement>

            </div>
            <div className="Copyright">
                     &copy; 2021 NextTrip. All rights reserved.
            </div>
        </div>
    </Aux>
    );
}

export default Footer;