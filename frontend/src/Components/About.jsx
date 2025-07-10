// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="pt-20 pb-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#FF8000] mb-6">
        About Us
      </h2>
      <p className="text-gray-700 text-lg text-center mb-10">
        Welcome to <span className="font-semibold text-[#FF8000]">Royal Dine</span>, where tradition meets taste.
      </p>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1707138088/9f7cae90768edde9ca573d52c726decd.jpg"
          alt="Restaurant"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="mb-4">
            Established in 2010, Royal Dine has been the heart of fine dining in the city. From traditional Indian recipes to modern global dishes, we bring flavors from every corner of the world onto your plate.
          </p>
          <p>
            We believe in quality, warmth, and unforgettable experiences. Every dish is crafted with love, fresh ingredients, and a sprinkle of royalty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
