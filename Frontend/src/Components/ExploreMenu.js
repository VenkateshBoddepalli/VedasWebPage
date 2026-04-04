import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import menuData from "../data/menuData";
import "./ExploreMenu.css";

const ExploreMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page">

      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Home
      </motion.button>

      {/* Page Title */}
      <motion.h1
        className="menu-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Menu
      </motion.h1>

      {/* Menu Grid */}
      <div className="menu-grid">
        {menuData.map((category, index) => (
          <motion.div
            key={index}
            className="menu-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            <h2>{category.category}</h2>

            <ul>
              {category.items.map((item, i) => (
                <li key={i}>
                  <span>{item.name} {item.qty}</span>
                  {/* <span>{item.qty}</span> */}
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
