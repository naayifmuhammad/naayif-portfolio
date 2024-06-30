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
    <form ref={popUpRef} onSubmit={sendEmail} className="contact-form col-lg-4 ">
    <a className='popup-close-btn' onClick={props.handlePopup}> &times;</a>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
    <span className={`status-msg pt-3 ${msgColor}`}>{statusMsg}</span>
    </form>
   </div>
  );
};

