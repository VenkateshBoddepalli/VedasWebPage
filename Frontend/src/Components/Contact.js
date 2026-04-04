import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
// import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

 const handleSubmit = async (event) => {
  event.preventDefault();

  if (message.trim() === "") {
    toast.error("Please write something!");
    return;
  }

  try {
    setMessage("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "bfb19bbe-72cb-44d1-af59-3f1a589aeeac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();

    if (res.success) {
      toast.success("Submitted Successfully!");
      setMessage("");
      event.target.reset();
      navigate("/");
    } else {
      toast.error(res.message || "Something went wrong!");
    }

  } catch (error) {
    console.error("Error:", error);
    toast.error("Network error. Try again!");
  }
};


  return (
    <div className="contact-wrapper">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Back Button */}
      {/* <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button> */}

      <div className="contact-container">
        
        {/* LEFT SIDE (A) */}
        <div className="contact-left">
          <h1>Have Questions In Mind?</h1>
          <p>
            Connect with us for any queries, support, or collaboration.  
            We are always ready to help you with the best solutions.
          </p>

          <div className="contact-info">
            <p>📧 info@vedasmess.com</p>
            <p>📞 +91 91773 70914</p>
            <p>📍 Hyderabad, India</p>
          </div>
        </div>

        {/* RIGHT SIDE (B) */}
        <div className="contact-right">
          <div className="form-box">
           <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
             <button>
              Submit →
            </button>
            
           </form>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
