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

    return () =>{
        document.removeEventListener('mousedown',handleClickOutside);
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
   <div className="popup-container d-flex justify-content-center align-items-center">
     <form ref={popUpRef} onSubmit={sendEmail} className="contact-form col-4">
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

