import React, { useState } from "react";
import { testimonials } from "../data/testimonialData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 1
    );
  };

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-top">
        <p className="subheading">Testimonial</p>
        <h1>What Our Customers Say</h1>
        <p>
          Our customers love the taste, quality, and service we provide.
        </p>
      </div>

      {/* Cards */}
      <div className="testimonial-cards">
        {testimonials.slice(index, index + 3).map((item) => (
          <div className="testimonial-card" key={item.id}>
            
            {/* Stars */}
            <div className="stars">
              {[...Array(5)].map((_, i) =>
                i < item.rating ? (
                  <AiFillStar key={i} />
                ) : (
                  <AiOutlineStar key={i} />
                )
              )}
            </div>

            <p className="text">"{item.text}"</p>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>
    </div>
  );
};

export default Testimonial;
