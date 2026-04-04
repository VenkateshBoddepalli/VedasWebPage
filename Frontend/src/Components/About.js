import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.webp";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h3 className="primary-heading">
          Food Made with Care Nourishes the Body & Soul
        </h3>
        <p className="primary-text">
          Because great taste should never come at the cost of your wellbeing.
        </p>
        <p className="primary-text">
          మనం చేసే ప్రతి వంటకం ఇంటి రుచితో, స్వచ్ఛమైన పదార్థాలతో సిద్ధమవుతుంది.
          రుచికరమై, ఆరోగ్యకరమై ఉండే ఆహారమే మా లక్ష్యం.
        </p>
        <div className="about-buttons-container">
          <button
            className="discover-btn"
            onClick={() => navigate("/discoverStory")}
          >
            Discover Our Story
          </button>

          <button
            className="watch-video-button"
            onClick={() => navigate("/watchVideo")}
          >
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
