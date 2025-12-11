import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if(message.trim() === ""){
       toast.error("Please write something!");
       return;
    }
    toast.success("Submitted Sucessfully!");
    console.log("User message:", message);
    setMessage(""); //clear Input
    navigate("/");
  }

  return (
    <div className="contact-page-wrapper">
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2000} />

      {" "}
      {/* Back Button */}{" "}
      <button className="back-btn" onClick={() => navigate(-1)}>
        {" "}
        ← Back{" "}
      </button>{" "}
      <h1 className="primary-heading">Have Question In Mind?</h1>{" "}
  
      <div className="contact-form-container">
        {" "}
        <input type="text" placeholder="Write your message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
        <br /> <button className="secondary-button" onClick={handleSubmit}>Submit</button>{" "}
      </div>{" "}
      <Footer/>
    </div>
    
  );
};
export default Contact;
