require('dotenv').config();
const Razorpay = require('razorpay');
const crypto = require('crypto');

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

// Create Order
const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // paise
      currency: 'INR',
      receipt: 'order_' + Date.now(),
    };
  
    const order = await instance.orders.create(options);

    res.json({
      success: true,
      order,
      key: process.env.KEY_ID,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify Payment
const verifyPayment = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (generatedSignature === razorpay_signature) {

    // STORE IN DATABASE
    req.connection.query(
      "INSERT INTO payments (order_id, payment_id, amount, status) VALUES (?, ?, ?, ?)",
      [razorpay_order_id, razorpay_payment_id, 1700, "SUCCESS"], // amount dynamic later
      (err, result) => {
        if (err) {
          console.log("DB Error:", err);
        } else {
          console.log("Payment Saved ");
        }
      }
    );

    res.json({ success: true, message: "Payment Verified & Saved " });

  } else {
    res.status(400).json({ success: false, message: "Invalid Signature " });
  }
};


module.exports = {
  createOrder,
  verifyPayment,
};
