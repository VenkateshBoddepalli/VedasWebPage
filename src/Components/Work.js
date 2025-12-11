import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick the meals you love.choose from fresh,homemade dishes.enjoy quality food made for your taste.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your delivery schedule.pick your preferred days and time.we adapt to your routine effortlessly.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Your food arrives hot and fresh.track the delivery in real time.enjoy quick service without waiting.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text" style={{textAlign:"start"}}>
          Pick your favourite dishes from our menu.
          Relax while we prepare and deliver with care.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p style={{textAlign:"start"}}>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
