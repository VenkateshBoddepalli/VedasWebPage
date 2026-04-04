import React, { useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { messPlans } from "../data/messPlans.js";
import "./messCard.css";
import CloseIcon from "@mui/icons-material/Close";

const MessCard = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [open]);

  const handlePayment = async (amount, title) => {
    try {
      const { data } = await axios.post(
        "https://vedaswebpageapi.onrender.com/api/payment/create-order",
        { amount }
      );

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: "INR",
        name: "Vedas Mess",
        description: `${title} Plan`,
        order_id: data.order.id,

        handler: async function (response) {
          const verifyRes = await axios.post(
            "https://vedaswebpageapi.onrender.com/api/payment/verify-payment",
            response
          );
          alert(verifyRes.data.message);
        },

        theme: { color: "#a855f7" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="popup-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="popup-header">
              <h2>🍽️ Vedas Mess Plans</h2>
              <CloseIcon className="close-icon" onClick={onClose} />
            </div>

            <div className="plans-container">
              {messPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  className="plan-card"
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="plan-header">
                    <div>
                      <div className="plan-title">{plan.title}</div>
                      <div className="plan-desc">{plan.desc}</div>
                    </div>

                    <div className="price">₹{plan.price}</div>
                  </div>

                  <button
                    className="pay-btn"
                    onClick={() =>
                      handlePayment(plan.price, plan.title)
                    }
                  >
                    Select Plan →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MessCard;
