import React from 'react';
import Aux from './../../hoc/Aux1'
import './FourOFour.css'
import NavBar from './../../Components/Navigation/NavBar'
import Footer from './../../Components/Footer/Footer'
import BackgroundImg from './../../Images/policy.8bfb5261eb6d513e660a.jpg'
const FourOFour = () => {
    return (
            <Aux>
                <NavBar/>
                
                <div className="Fourofour">
                         The page that you are looking for is currently unavailable.
                </div>

                    <img className="BackgroundImg" src={BackgroundImg} alt="LoadingError"></img>
               <Footer/>
            </Aux>
        );

};

export default FourOFour;