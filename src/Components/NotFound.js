import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <motion.button
              className="back-btn"
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
    </div>
  )
}

export default NotFound;
