import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./WatchVideo.css";

// Import internal images
import Food1 from "../Assets/Food_image-01.jpg";
import Food2 from "../Assets/Food_image-02.jpg";
import Food3 from "../Assets/Food_image-03.jpg";

const slideImages = [
  { id: 1, url: Food1 },
  { id: 2, url: Food2 },
  { id: 3, url: Food3 },
];

const WatchVideo = () => {
  const navigate = useNavigate();
  const goToPage = () => navigate("/");
  const goToOrder = () => navigate("/icon");
  const goToSub = () => navigate("/contact");
  const goToFotter = () => navigate("/footer");


  return (
    <div className="watch-video-wrapper">

      {/* SLIDER */}
      <div className="slide-container">
        <Fade>
          {slideImages.map((slide) => (
            <div key={slide.id}>
              <div
                className="slide-img"
                style={{ backgroundImage: `url(${slide.url})` }}
              ></div>
            </div>
          ))}
        </Fade>
      </div>

      {/* VIDEOS SECTION */}
      <div className="video-section">
        <h2>Watch Our Story</h2>
        <p className="video-sub">Experience the taste, quality and passion behind Veda’s kitchen</p>

        <div className="video-grid">
          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/UyfwGsWDJsk" title="video1" allowFullScreen></iframe>
          </div>

          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/XGrSt192Hxw" title="video2" allowFullScreen></iframe>
          </div>

          <div className="video-box">
            <iframe src="https://www.youtube.com/embed/OXEX9JZ2wNk" title="video3" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      {/* ACTION CARDS */}
      <div className="action-cards">
        <div className="action-card" onClick={goToPage}>
          <i className="fa-solid fa-address-card"></i>
          <span>Explore Our Menu</span>
        </div>

        <div className="action-card" onClick={goToOrder}>
          <i className="fa-solid fa-burger"></i>
          <span>Order Your Meal</span>
        </div>

        <div className="action-card" onClick={goToSub}>
          <i className="fa-solid fa-envelope"></i>
          <span>Subscribe Updates</span>
        </div>

        <div className="action-card" onClick={goToFotter}>
          <i className="fa-solid fa-phone"></i>
          <span>Contact Support</span>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
