import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CheckOut.css";

// Checkout supports BOTH props cart and router state cart
const CheckOut = ({ cart: propCart = {} }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Prefer cart from router state, fallback to props, then empty object
  const cart = state?.cart || propCart || {};

  const [address, setAddress] = useState("home");
  const [payment, setPayment] = useState("upi");
  const [total, setTotal] = useState(0);

  //  SAFE total calculation
  const totalPrice = Object.values(cart).reduce(
    (sum, i) => sum + (i?.qty || 0) * (i?.price || 0),
    0
  );

  const hasItems = Object.values(cart).some((i) => i?.qty > 0);

useEffect(() => {
  const storedTotal = localStorage.getItem("orderTotal");

  if(storedTotal){
    setTotal(Number(storedTotal));
  }
},[]);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {hasItems && (
        <div className="checkout-section">
          <p>Your cart is empty.</p>
          <button className="place-order-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      )}

      {!hasItems && (
        <>
          {/* Address Selection */}
          <div className="checkout-section">
            <h3>Select Delivery Address</h3>
            <label>
              <input
                type="radio"
                name="address"
                checked={address === "home"}
                onChange={() => setAddress("home")}
              />
              Home – Near Main Road
            </label>
            <label>
              <input
                type="radio"
                name="address"
                checked={address === "office"}
                onChange={() => setAddress("office")}
              />
              Office – Tech Park
            </label>
          </div>

          {/* Payment Options */}
          <div className="checkout-section">
            <h3>Payment Method</h3>
            <label>
              <input
                type="radio"
                name="payment"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />
              UPI (GPay / PhonePe)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
              />
              Cash on Delivery
            </label>
          </div>

          {/* Order Summary */}
          <div className="checkout-section">
            <h3>Order Summary</h3>
            {Object.entries(cart).map(([name, item]) => (
              item?.qty > 0 && (
                <div key={name} className="summary-row">
                  <span>{name} × {item.qty}</span>
                  <span>₹{item.qty * item.price}</span>
                </div>
              )
            ))}
            <hr />
            <div className="summary-total">
              <strong>Total</strong>
              {/* <strong>₹{totalPrice}</strong> */}
              <strong>₹{total}</strong>
            </div>
          </div>

          <button
            className="place-order-btn"
            onClick={() => alert("Order placed successfully 🎉")}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CheckOut;
