import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar , AiTwotoneStar } from "react-icons/ai";


const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text" style={{textAlign:"start"}}>
          People love our fresh flavours, warm service, and consistent quality.Every review inspires us to cook with more heart.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img style={{height:"70px", width:"70px"}}src={ProfilePic} alt="" />
        <p style={{textAlign:"start"}}>
          Tried Veda’s Flavours Tiffins today and loved it!Everything was fresh, hot, and super tasty.Definitely my new go-to place for breakfast
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiTwotoneStar />
        </div>
        <h2>Venkatesh Boddepalli</h2>
      </div>
    </div>
  );
};

export default Testimonial;
