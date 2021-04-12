import React from 'react';
import './Assistance.css';
import PhoneIcon from './../../Images/phone.svg';
function Assistance(props) {
    return (
        <div className="AssistanceDiv">
            <div className="PhoneIcon">
                
                <svg width="100" height="150">
                    <circle cx="50" cy="100" r="48" stroke="#5ea5f5" strokeWidth="2" fill="none" />
                    <image className='img-circle' xlinkHref={PhoneIcon} x='20' y="70" height="60" width="60"/>
                </svg>
            
            </div>
            <p></p>
            <a href="tel:1-888-444-5555">
                 <b>1-888-444-5555</b>
            </a>
            <div className="AssistanceText">
                <h1 >Need assistance?</h1>
                For immediate assistance with your reservation, please call us. For general questions, you can email us. You'll resive a response witin 2 
                buisness days.
            </div>
        </div>
    );
}

export default Assistance;