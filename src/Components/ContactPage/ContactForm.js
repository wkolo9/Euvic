import React, { Component } from 'react';
import './ContactForm.css';
import ValidWarningIcon from '../.atoms/ValidWarningIcon'
import ValidWarningText from '../.atoms/ValidWarningText'
import InvalidEmail from '../.atoms/InvalidEmail'
import axios from './../../axios'
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from '../../UI/Spinner'
import ErrorMessage from '../.molecules/ErrorMessage'
import SuccesMessage from '../.molecules/SuccesMessage'
import Aux from '../../hoc/Aux1'

class ContactForm extends Component {
    state = {
        loading: false,
        formSubmitted:false,
        recaptchaFormToSend:false, 
        recaptchaShowWarning:true, 
        email:{
            value:'',
            isEmail:true,
            valid:true,
        },
        subject:{
            value:'',
            valid:true,
        },
        comment:{
            value:'',
            valid:true,
        },
        error:{
            isError: null,
            errorStatus:null,
        },
        
    }
    constructor(){
        super();
        this.recaptchaRef = React.createRef();
    }
 
updateInputValue(id, e) {
     if(id==='email'){
        const updatedState = {...this.state}
        updatedState.email.value=e.target.value
            this.setState(updatedState);
     }

     if(id==='subject'){
        const updatedState = {...this.state}
        updatedState.subject.value=e.target.value
            this.setState(updatedState);
     }

     if(id==='comment'){
        const updatedState = {...this.state}
        updatedState.comment.value=e.target.value
            this.setState(updatedState);
     }
  
}
validCheckHandler = (id) =>{
const updatedState = {...this.state}
    if(id==='email'){                   ///switch case might be also used here
        if(this.state.email.value.length > 0 ){
            updatedState.email.valid = true; 
            this.isEmailHandler();
        }
        else{
            updatedState.email.valid = false;
            updatedState.email.isEmail=true;
        }
       
    } 

    if(id==='subject'){
        if(this.state.subject.value.length > 0 ){
            updatedState.subject.valid = true; 
        }
        else{
            updatedState.subject.valid = false;
        }
    }

    if(id==='comment'){
            if(this.state.comment.value.length > 0 ){
                updatedState.comment.valid = true; 
            }
            else{
                updatedState.comment.valid = false;
            }
       
     } 
     this.setState(updatedState);
}

isEmailHandler= ()=>{
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let isValid = pattern.test(this.state.email.value)
    const updatedState = {...this.state}
    updatedState.email.isEmail = isValid;
    this.setState(updatedState);    
    console.log(this.state.email.isEmail)
}
postCommentHandler=(event) =>{
    event.preventDefault();
    if(this.state.email.value && this.state.subject.value && this.state.comment.value &&  this.state.email.isEmail &&  !this.state.recaptchaStopFromSending){
        this.setState({loading:true});
        const commentData ={
            email: this.state.email.value,
            subject: this.state.subject.value,
            comment: this.state.comment.value,
        }
        axios.post('/comments.json', commentData) ///url defined in axios.js in src folder

        .then(res=>{
            const updatedState = {...this.state}
            updatedState.formSubmitted=true;
            updatedState.loading=false;
            this.setState(updatedState);
        })

        .catch(err => {
            this.ErrorHandler(err)
            // this.setState({loading:false});
        })
    }
    if(!this.state.email.value){
        const updatedState = {...this.state}
        updatedState.email.valid=false;
        this.setState(updatedState);
    }
    if(!this.state.subject.value){
        const updatedState = {...this.state}
        updatedState.subject.valid=false;
        this.setState(updatedState);
    }
    if(!this.state.comment.value){
        const updatedState = {...this.state}
        updatedState.comment.valid=false;
        this.setState(updatedState);
    } 
    if(!this.state.recaptchaFormToSend){
        const updatedState = {...this.state}
        updatedState.recaptchaShowWarning=false;
        this.setState(updatedState);

    }
}

ErrorHandler= (e) =>{
    const updatedState = {...this.state}
    updatedState.loading= true;
    updatedState.error.isError = true;
    updatedState.error.errorStatus = e.response.status
    this.setState(updatedState);
}

toggleFormHandler=()=>{
    const updatedState = {...this.state}
    updatedState.formSubmitted=false;
    updatedState.error.isError=false;
    updatedState.error.errorStatus=false;
    updatedState.loading=false;
    this.setState(updatedState)
}
recaptchaChangeHandler=()=>{
    const updatedState = {...this.state};
    updatedState.recaptchaFormToSend = true;
    this.setState(updatedState)
}

render(){
    let contactForm = ( <div className='ContactDiv'>    
                    <form onSubmit={this.postCommentHandler}>
                        <div className="header3"> 
                            <b>Email Us</b>
                        </div> 
                        <div className="ValidationText"></div>  

                {/* EMAIL INPUT */}
                        <label className="ContactLabel">EMAIL <span style={{color: "red"}}>* </span></label>
                        <div className={"InputDiv"  + (((this.state.email.valid===false) || (this.state.email.isEmail===false)) ? "RedBorder" : "" )}>
                                    <input type="email" className="Input" placeholder="Enter Your Email" 
                                    value={this.state.email.value} onChange={e => this.updateInputValue('email', e)}
                                        onBlur={()=>this.validCheckHandler('email')}
                                    />

                                    <ValidWarningIcon showV={this.state.email.valid} showE={this.state.email.isEmail}/> 
                        </div>
                        <div className="ValidationText">
                            <ValidWarningText show={this.state.email.valid}/>
                            <InvalidEmail show={this.state.email.isEmail}/>
                        </div>  
                        <p></p>
                {/* SUBJECT INPUT */}
                        <label  className="ContactLabel">SUBJECT <span style={{color: "red"}}>*</span></label>
                        <div className={"InputDiv"  + ((this.state.subject.valid===false) ? "RedBorder" : "" )}>
                                <input type="text" className="Input"  placeholder="Enter Subject"
                                value={this.state.subject.value} onChange={e => this.updateInputValue('subject', e)}
                                onBlur={()=>this.validCheckHandler('subject')}
                                />
                                <ValidWarningIcon showV={this.state.subject.valid} showE={true}/>
                        </div>
                        <div className="ValidationText">
                                <ValidWarningText show={this.state.subject.valid}/>
                        </div>  

                        <p></p>
                {/* Comment INPUT */}
                        <label  className="ContactLabel">COMMENT <span style={{color: "red"}}>*</span></label>
                        <div className="InputDivMSG">
                            <textarea  name="message" className={'MessageArea'   + ((this.state.comment.valid===false) ? "RedBorder" : "" )}
                            placeholder="Write your comment..."
                            value={this.state.comment.value} onChange={e => this.updateInputValue('comment', e)}
                            onBlur={()=>this.validCheckHandler('comment')}/>
                            <ValidWarningIcon showV={this.state.comment.valid} showE={true}/>
                        </div>
                        
                        <div className="ValidationText">
                        <ValidWarningText show={this.state.comment.valid}/>
                        </div>   
                         <p></p>
                {/* ReCAPTCHA */}
                        <div className="ReCaptchaDiv">
                        <ReCAPTCHA
                            ref={this.recaptchaRef}
                            sitekey="6Lf6IqQaAAAAAPxkuxZ8ledJ01HprMWG6fEiAmOo"
                            onChange={this.recaptchaChangeHandler}
                        />

                        </div>
                        <div className="ValidationTextRecaptcha">
                        <ValidWarningText show={this.state.recaptchaShowWarning}/>
                        </div>
                       
                    <div className="SubmitDiv"> 
                        <input type="submit" className="SendButton" value="SEND" /> 
                    </div>
                    
                </form>
                </div>)
    
    if(this.state.error.isError)
    contactForm =(<div className='ContactDiv'>
                        <ErrorMessage isError={this.state.error.isError} errorType={this.state.error.errorStatus} clicked={this.toggleFormHandler}/>                      
                 </div>)
                 
    else if(this.state.formSubmitted)  
            contactForm =(<div className='ContactDiv'>
                                <SuccesMessage  clicked={this.toggleFormHandler}/>     
                        </div>)

    else if(this.state.loading){
        contactForm=(
            <div className='ContactDiv'>
                <div style={{marginTop:'18vh'}}>
                    <Spinner/>
                </div>
               
            </div>)
    }

    return(
        <Aux>
             {contactForm}
        </Aux>  
    );
}}


export default ContactForm;