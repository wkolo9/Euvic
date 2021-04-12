import React from 'react';
import './ContactPage.css';
import ContactForm from './../../Components/ContactPage/ContactForm'
import Assistance from './../../Components/ContactPage/Assistance'
import Aux from './../../hoc/Aux1'
import NavBar from './../../Components/Navigation/NavBar'
import Footer from './../../Components/Footer/Footer'
import BackgroundImg from './../../Images/policy.8bfb5261eb6d513e660a.jpg'
const ContactPage = (props) => {
     
        return (
            <Aux>
                <NavBar/>
                <div className="UpperDiv">
                    <Assistance/>
                    <ContactForm/>
                </div>
                
                     <img className="BackgroundImg" src={BackgroundImg} alt="LoadingError"></img>
               <Footer/>
            </Aux>
        );
    }


export default ContactPage;