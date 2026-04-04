import React from "react";
import { motion } from "framer-motion";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick the meals you love. Choose from fresh homemade dishes.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your delivery schedule as per your convenience.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your food hot and fresh at your doorstep.",
    },
  ];

  // Parent animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Card animation
  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Pick your favourite dishes and enjoy hassle-free delivery.
        </p>
      </div>

      <motion.div
        className="work-section-bottom"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {workInfoData.map((data) => (
          <motion.div
            className="work-section-info"
            key={data.title}
            variants={card}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
