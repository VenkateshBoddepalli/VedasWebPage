import React from "react";
import "./DiscoverStory.css";
import StoryImg from "../Assets/Food_image-04.jpg"; // change if needed
import { useNavigate } from "react-router-dom";

function DiscoverStory() {

    const navigate = useNavigate();

  return (
    <div className="discover-wrapper">
      <div className="discover-container">

        {/* LEFT IMAGE */}
        <div className="discover-image">
          <img src={StoryImg} alt="Vedas Flavours Hub" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="discover-content">
          <h2 className="discover-title">Discover Our Story</h2>

          <p className="discover-text">
            At <strong>Veda’s Flavours Hub</strong>, every recipe tells a story—  
            a story of tradition, purity and authentic South-Indian taste.
          </p>

          <p className="discover-text">
            From crispy dosas to fluffy idlis, spicy chutneys to homely meals,
            we prepare every dish with fresh ingredients and hand-crafted flavour.
          </p>

          <p className="discover-text">
            Our mission is simple — <strong>serve comfort food that feels like home</strong>.
          </p>

          <button className="discover-btn" onClick={() => navigate("/exploreMenu")}>Explore Our Menu</button>
        </div>

      </div>
    </div>
  );
}

export default DiscoverStory;
