import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Popup.css'


export const Popup = (props) => {
  const popUpRef = useRef();

  const [statusMsg,setStatusMsg] = useState("")
  const [msgColor,setMsgColor] = useState("success")


  const handleClickOutside = (event) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target)) {
      props.handlePopup(); // Call the function to close the popup
    }
  };

  useEffect(()=>{

    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () =>{
        document.removeEventListener('mousedown',handleClickOutside);
        document.body.style.overflow = 'auto';
    }

  },[]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nm7wa6j', 'template_gjd8rjq', popUpRef.current, {
        publicKey: 'AsRuPjN7Iu870zkZa',
      })
      .then(
        () => {
          setMsgColor("success")
          setStatusMsg("Will get back to you ASAP");
          props.handlePopup()
        },
        () => {
            setMsgColor("failure")
          setStatusMsg("Something went wrong. Please try again!")
        },
      );
  };

  return (
   <div className="popup-container d-flex justify-content-center align-items-center col-12">
    <form ref={popUpRef} onSubmit={sendEmail} className="contact-form col-lg-4 py-2 pb-5 ">
    <div className="close-button-container d-flex flex-row-reverse">
      <a className='popup-close-btn mb-5 px-2 pb-1' onClick={props.handlePopup}> &times;</a>
    </div>
    
    <h1 className="contact-form-header pb-3">What can I help you with?</h1>
    {/* <label className='form-label-dark' >Name</label> */}
    <input className='form-field-dark' placeholder='Name'  type="text" name="user_name" />
    {/* <label className='form-label-dark' >Email</label> */}
    <input className='form-field-dark'  placeholder='Enter your email' type="email" name="user_email" />
    {/* <label className='form-label-dark' >Message</label> */}
    <textarea className='form-field-dark' placeholder='Message' name="message" />
    <input className='form-submit-btn-dark' type="submit" value="Send" />
    <span className={`status-msg pt-3 ${msgColor}`}>{statusMsg}</span>
    </form>
   </div>
  );
};

