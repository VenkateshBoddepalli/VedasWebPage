import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate();

const navigateToExploreMenu = () => {
  navigate("/exploreMenu")
}

  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Fresh Flavours, Cooked with Love, Delivered Fast
          </h1>
          <p className="primary-text">
           Healthy kitchen chefs do all the prep — peeling, chopping & seasoning — so you enjoy food that feels like home.
          </p>
          <button className="secondary-button" onClick={navigateToExploreMenu}>
            Explore Menu <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
